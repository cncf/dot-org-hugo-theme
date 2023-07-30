const accordions = document.querySelectorAll(".accordion");

const openAccordion = (accordion) => {
    const content = accordion.querySelector(".accordion__content");
    accordion.classList.add("accordion__active");
    content.style.maxHeight = content.scrollHeight + "px";
};

const closeAccordion = (accordion) => {
    const content = accordion.querySelector(".accordion__content");
    accordion.classList.remove("accordion__active");
    content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
    const title = accordion.querySelector(".accordion__title");
    const content = accordion.querySelector(".accordion__content");

    title.onclick = () => {
        if (content.style.maxHeight) {
            closeAccordion(accordion);
        } else {
            accordions.forEach((accordion) => closeAccordion(accordion));
            openAccordion(accordion);

            // Use setTimeout to wait a moment before scrolling into view
            setTimeout(() => {
                accordion.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 500);
        }
    };
});
