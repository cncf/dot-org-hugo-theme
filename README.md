# Dot-Org theme for Hugo

This Hugo theme is ideal for powering the website of a small organization. It was built initially for the [TODO Group](https://todogroup.org/) and has the following strengths:
- **Modern** - simple yet effective modern design
- **Accessible** - design and markup comply with WCAG 2.1 AA guidelines
- **Performant** - HTML/CSS/JS written from scratch to be as fast as possible without relying on frameworks or libraries
- **Multilingual** - ready to support multiple languages of content
- **Mega Menu** - large menu with dropdown sections
- **FAQ accordion** - FAQ page with accordion structure
- **Search** - PageFind search is integrated

[View demo site](https://dot-org-hugo-theme-demo.netlify.app/)

# Installation

There are two main methods of installing this theme to an existing Hugo site:

## 1) Download it

Inside the folder of your Hugo site, run:

```bash
git clone https://github.com/cncf/dot-org-hugo-theme themes/dot-org-hugo-theme
```

This downloads the repo from GitHub and puts the contents in your themes folder.

To update your theme to future versions:

```bash
cd themes/dot-org-hugo-theme
git pull
```

## 2) Use git submodule

Inside the folder of your Hugo site run:

```bash
git submodule add https://github.com/cncf/dot-org-hugo-theme.git themes/dot-org-hugo-theme
```

This downloads the repo from GitHub and puts the contents in your themes folder as a git sub-module.

To update your theme to future versions:

```bash
git submodule update --remote --merge
```

## Installing dependencies 

Copy (at least) the following files from the themes exampleSite to the root folder of your project.

- themes/dot-org-hugo-theme/exampleSite/package.json
- themes/dot-org-hugo-theme/exampleSite/postcss.config.js

For ease you can run from the command line:

```bash
cp themes/dot-org-hugo-theme/exampleSite/package.json .
cp themes/dot-org-hugo-theme/exampleSite/postcss.config.js .
```

We recommend a config directory approach to replace your config.toml or hugo.toml file. To get up and running quickly with the default config, you can copy the following folder to the root of your site:

- themes/dot-org-hugo-theme/exampleSite/config/

From the command line in your project root, you can run the following to copy the themes exampleSite config to your project:

```bash
cp -r themes/dot-org-hugo-theme/exampleSite/config ./config
```

After that, run this command to install dependencies (requires [node.js](https://nodejs.org/)).

```bash
npm install
```

You can then run a local server using:

```bash
npm run start
```

or you can build your site using:

```bash
npm run build
```

## Config files

See /exampleSite/config/ for example configuration files.

You should copy these across or merge them with your existing config.

## Custom front matter

We have created custom front matter to use in your markdown files:

#### Hide the page title / article header

```
showHeader: false
```

#### Add noindex to a page

```
noindex: true
```

## Search index

[Pagefind](https://pagefind.app/) can be used to search the contents of your site. We include a search.html in the theme that is already set up. The search and results UI can also be inserted into any page using the [shortcode](#search-form). For Pagefind to work, the pagefind index must be built from the files in your `public` directory. First, make sure your site it built, and then install pagefind and index the site:

```
npm run build
npx -y pagefind --site public
```

Every time your content is updated, you need to update the search index by again running `npx -y pagefind --site public`, so this should be part of your deployment process.

## Custom shortcodes 

You can use our custom shortcodes to quickly style your website in markdown. Due to the way Hugo deals with nested content, particularly nested shortcodes, you may find that shortcodes that are children of other shortcodes do not render as they should. If this happens to your site, this can often be resolved by allowing Hugo to [render "unsafe" HTML](https://gohugo.io/getting-started/configuration-markup/#goldmark). Add the following to your config YAML file:

```yaml
markup:
  goldmark:
    renderer:
      unsafe: true
```

### Button

There is a button ready to be inserted in to markdown files:

```md
{{< button link="/path/to/page" text="Default Button" >}}
```
```md
{{< button link="/path/to/page" style="secondary" text="Secondary Button" >}}
```
```md
{{< button link="/path/to/page" style="tertiary" text="Tertiary Button" >}}
```

Options:
- link # (required) the button link
- text # (required) the button text
- style # (optional) secondary, tertiary

### Cards

An outlined box that is useful for highlighting information or using to wrap list elements.

```
{{< cards count=2 >}}
{{< card >}}
## Special Feature 1
Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo
{{< spacer >}}
[Download](#)
{{< /card >}}
{{< card >}}
## Special Feature 2
Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo
{{< spacer >}}
[About us](#)
{{< /card >}}
{{< /cards >}}
```

Options:
- count # (optional) number of columns on desktop; 2,3,4. Default: 3.

### Columns

A responsive column structure.

```
{{< columns >}}
{{< column >}}
Column 1
{{< /column >}}
{{< column >}}
Column 2
{{< /column >}}
{{< /columns >}}
```

Options:
- count # (optional) number of columns on desktop; 2,3,4. Default: 3.

### Current Year

Insert the current year easily with this shortcode:

```
{{< current_year >}}
```

Useful for copyright notices and evergreen blog content.

### iFrame

Insert an iFrame with your desired content.

```
{{< iframe title="My slides" src="https://www.slideshare.net/slideshow/embed_code/key/vTNvkwIXN4pmr8" >}}
```

Options:
- src # (required) the page to display
- width # (optional)
- height # (optional)
- title # (optional) the title of the iframe for accessibility
- loading # (optional) defaults to lazy

### Img

Inserts an image in a more advanced format than standard Hugo syntax.

```
{{< img src="/img/blog/image-name.png" >}}
```

Options: 
- src # (required) the image link
- alt # (optional) describing the image, defaults to filename
- width # (optional) recommended 
- height # (optional) recommended
- caption # (optional) markdown is accepted
- loading # (optional) defaults to lazy, use eager above the fold

### Intro

Formats a paragraph with larger text as suitable for an introduction paragraph at the top of a page.

```
{{< intro >}}
Paragraph text...
{{< /intro >}}
```

### Linebreak

Sometimes markdown can bunch paragraphs together. You can force a line return using the linebreak shortcode.

```
{{< br >}}
```

### Responsive Table

Wrap your large tables with this shortcode so they overflow on mobile:

```
{{< responsive_table >}}
| Option | Option | Description |
| ------ | ------ | ----------- |
| one    | data   | path to data files to supply the data that will be passed into templates. |
| two    | engine | engine to be used for processing templates. Handlebars is the default. |
| three  | ext    | extension to be used for dest files. |
{{< /responsive_table >}}
```

### Search form

A search form for querying [the pagefind index](#search-index) and showing results.

```
{{< search_form >}}
```

### Spacer

A spacer is useful for spacing out content on your page. By default our spacer inserts a 50px height space. Our spacer is responsive, so on mobile devices the value is reduced by 50% (i.e. 50px space becomes 25px space).

```
{{< spacer >}}
```
```
{{< spacer 100 >}}
```

### Table of Contents (TOC)

Insert a Table of Contents automatically in to your page. Picks up on all H2 elements on the page.

```
{{< toc >}}
```

### YouTube Enhanced

A privacy friendly and fast YouTube embed.

```
{{< youtube_enhanced id="9oVr7rrNZVI" >}}
```

For embedding playlists, a singular video id must be mentioned as playlists do not have a thumbnail.

```
{{< youtube_enhanced id="xPSXtoJNGLs" title="Play Videos from Kubecon" playlistid="PLj6h78yzYM2PyrvCoOii4rAopBswfz1p7" >}}
```

Options:
- id # (required)
- title # (optional) defaults to Play Video
- playlistid # (optional) your playlist ID
- autoload # (optional) defaults to false
- start # (optional) the start time in seconds, default 0


## Setting up a local instance for improving this theme

If you want to create improvements for this theme for everyone, follow these instructions to launch the exampleSite. 

```bash
git clone https://github.com/cncf/dot-org-hugo-theme.git
cd dot-org-hugo-theme/exampleSite
npm install
npm run dev:start
```

## Other npm commands for working with a local instance

- `npm run dev:start` - Starts the local dev environment using exampleSite
- `npm run dev:start:with-pagefind` - Starts the local dev environment using exampleSite with working pagefind search
- `npm run dev:build` - Builds the site using exampleSite

## Showcase

Check out some themes that are using the Dot-Org theme for Hugo:

- [TODO Group](https://todogroup.org)
- [DeepCausality](https://deepcausality.com)
