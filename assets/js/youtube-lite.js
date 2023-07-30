/**
 * YouTube Lite 1.5.0
 * 
 * From https://github.com/justinribeiro/lite-youtube
 */
export class LiteYTEmbed extends HTMLElement {
    constructor() {
        super();
        this.isIframeLoaded = false;
        this.setupDom();
    }
    static get observedAttributes() {
        return ['videoid', 'playlistid'];
    }
    connectedCallback() {
        this.addEventListener('pointerover', LiteYTEmbed.warmConnections, {
            once: true,
        });
        this.addEventListener('click', () => this.addIframe());
    }
    get videoId() {
        return encodeURIComponent(this.getAttribute('videoid') || '');
    }
    set videoId(id) {
        this.setAttribute('videoid', id);
    }
    get playlistId() {
        return encodeURIComponent(this.getAttribute('playlistid') || '');
    }
    set playlistId(id) {
        this.setAttribute('playlistid', id);
    }
    get videoTitle() {
        return this.getAttribute('videotitle') || 'Video';
    }
    set videoTitle(title) {
        this.setAttribute('videotitle', title);
    }
    get videoPlay() {
        return this.getAttribute('videoPlay') || 'Play';
    }
    set videoPlay(name) {
        this.setAttribute('videoPlay', name);
    }
    get videoStartAt() {
        return this.getAttribute('videoStartAt') || '0';
    }
    get autoLoad() {
        return this.hasAttribute('autoload');
    }
    get noCookie() {
        return this.hasAttribute('nocookie');
    }
    get posterQuality() {
        return this.getAttribute('posterquality') || 'hqdefault';
    }
    get posterLoading() {
        return (this.getAttribute('posterloading') ||
            'lazy');
    }
    get params() {
        return `start=${this.videoStartAt}&${this.getAttribute('params')}`;
    }
    set params(opts) {
        this.setAttribute('params', opts);
    }
    setupDom() {
        const shadowDom = this.attachShadow({ mode: 'open' });
        let nonce = '';
        if (window.liteYouTubeNonce) {
            nonce = `nonce="${window.liteYouTubeNonce}"`;
        }
        shadowDom.innerHTML = `
      <style ${nonce}>
        :host {
          contain: content;
          display: block;
          position: relative;
          width: 100%;
          padding-bottom: calc(100% / (16 / 9));
        }

        @media (max-width: 40em) {
          :host([short]) {
            padding-bottom: calc(100% / (9 / 16));
          }
        }

        #frame, #fallbackPlaceholder, iframe {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
        }

        #frame {
          cursor: pointer;
        }

        #fallbackPlaceholder {
          object-fit: cover;
        }

        #frame::before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          background-image: linear-gradient(180deg, #111 -20%, transparent 90%);
          height: 60px;
          width: 100%;
          z-index: 1;
        }

        #playButton {
          width: 68px;
          height: 48px;
          background-color: transparent;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');
          z-index: 1;
          border: 0;
          border-radius: inherit;
        }

        #playButton:before {
          content: '';
          border-style: solid;
          border-width: 11px 0 11px 19px;
          border-color: transparent transparent transparent #fff;
        }

        #playButton,
        #playButton:before {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          cursor: inherit;
        }

        /* Post-click styles */
        .activated {
          cursor: unset;
        }

        #frame.activated::before,
        #frame.activated > #playButton {
          display: none;
        }
      </style>
      <div id="frame">
        <picture>
          <source id="webpPlaceholder" type="image/webp">
          <source id="jpegPlaceholder" type="image/jpeg">
          <img id="fallbackPlaceholder" referrerpolicy="origin" loading="lazy">
        </picture>
        <button id="playButton"></button>
      </div>
    `;
        this.domRefFrame = shadowDom.querySelector('#frame');
        this.domRefImg = {
            fallback: shadowDom.querySelector('#fallbackPlaceholder'),
            webp: shadowDom.querySelector('#webpPlaceholder'),
            jpeg: shadowDom.querySelector('#jpegPlaceholder'),
        };
        this.domRefPlayButton = shadowDom.querySelector('#playButton');
    }
    setupComponent() {
        this.initImagePlaceholder();
        this.domRefPlayButton.setAttribute('aria-label', `${this.videoPlay} ${this.videoTitle}`);
        this.setAttribute('title', `${this.videoPlay} ${this.videoTitle}`);
        if (this.autoLoad || this.isYouTubeShort()) {
            this.initIntersectionObserver();
        }
    }
    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case 'videoid':
            case 'playlistid':
            case 'videoTitle':
            case 'videoPlay': {
                if (oldVal !== newVal) {
                    this.setupComponent();
                    if (this.domRefFrame.classList.contains('activated')) {
                        this.domRefFrame.classList.remove('activated');
                        this.shadowRoot.querySelector('iframe').remove();
                        this.isIframeLoaded = false;
                    }
                }
                break;
            }
            default:
                break;
        }
    }
    addIframe(isIntersectionObserver = false) {
        if (!this.isIframeLoaded) {
            let autoplay = isIntersectionObserver ? 0 : 1;
            const wantsNoCookie = this.noCookie ? '-nocookie' : '';
            let embedTarget;
            if (this.playlistId) {
                embedTarget = `?listType=playlist&list=${this.playlistId}&`;
            }
            else {
                embedTarget = `${this.videoId}?`;
            }
            if (this.isYouTubeShort()) {
                this.params = `loop=1&mute=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${this.videoId}`;
                autoplay = 1;
            }
            const iframeHTML = `
<iframe frameborder="0" title="${this.videoTitle}"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
  src="https://www.youtube${wantsNoCookie}.com/embed/${embedTarget}autoplay=${autoplay}&${this.params}"
></iframe>`;
            this.domRefFrame.insertAdjacentHTML('beforeend', iframeHTML);
            this.domRefFrame.classList.add('activated');
            this.isIframeLoaded = true;
            this.attemptShortAutoPlay();
            this.dispatchEvent(new CustomEvent('liteYoutubeIframeLoaded', {
                detail: {
                    videoId: this.videoId,
                },
                bubbles: true,
                cancelable: true,
            }));
        }
    }
    initImagePlaceholder() {
        const posterUrlWebp = `https://i.ytimg.com/vi_webp/${this.videoId}/${this.posterQuality}.webp`;
        const posterUrlJpeg = `https://i.ytimg.com/vi/${this.videoId}/${this.posterQuality}.jpg`;
        this.domRefImg.fallback.loading = this.posterLoading;
        this.domRefImg.webp.srcset = posterUrlWebp;
        this.domRefImg.jpeg.srcset = posterUrlJpeg;
        this.domRefImg.fallback.src = posterUrlJpeg;
        this.domRefImg.fallback.setAttribute('aria-label', `${this.videoTitle}`);
        this.domRefImg?.fallback?.setAttribute('alt', `${this.videoTitle}`);
    }
    initIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isIframeLoaded) {
                    LiteYTEmbed.warmConnections();
                    this.addIframe(true);
                    observer.unobserve(this);
                }
            });
        }, options);
        observer.observe(this);
    }
    attemptShortAutoPlay() {
        if (this.isYouTubeShort()) {
            setTimeout(() => {
                this.shadowRoot
                    .querySelector('iframe')
                    ?.contentWindow?.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
            }, 2000);
        }
    }
    isYouTubeShort() {
        return (this.getAttribute('short') === '' &&
            window.matchMedia('(max-width: 40em)').matches);
    }
    static addPrefetch(kind, url) {
        const linkElem = document.createElement('link');
        linkElem.rel = kind;
        linkElem.href = url;
        linkElem.crossOrigin = 'true';
        document.head.append(linkElem);
    }
    static warmConnections() {
        if (LiteYTEmbed.isPreconnected || window.liteYouTubeIsPreconnected)
            return;
        LiteYTEmbed.addPrefetch('preconnect', 'https://i.ytimg.com/');
        LiteYTEmbed.addPrefetch('preconnect', 'https://s.ytimg.com');
        LiteYTEmbed.addPrefetch('preconnect', 'https://www.youtube.com');
        LiteYTEmbed.addPrefetch('preconnect', 'https://www.google.com');
        LiteYTEmbed.addPrefetch('preconnect', 'https://googleads.g.doubleclick.net');
        LiteYTEmbed.addPrefetch('preconnect', 'https://static.doubleclick.net');
        LiteYTEmbed.isPreconnected = true;
        window.liteYouTubeIsPreconnected = true;
    }
}
LiteYTEmbed.isPreconnected = false;
customElements.define('lite-youtube', LiteYTEmbed);