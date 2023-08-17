# Dot-Org Hugo theme

This Hugo theme is ideal for powering the website of a small organization. It was built initially for the [TODO Group](https://todogroup.org/) and has the following strenghts:
- **Modern** - simple yet effective modern design
- **Accessible** - design and markup comply with WCAG 2.1 AA guidelines
- **Performant** - HTML/CSS/JS written from scratch to be as fast as possible without relying on frameworks or libraries
- **Multilingual** - ready to support multiple languages of content

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

TODO

## Custom shortcodes 

### Button

There is a button ready to be inserted in to markdown files:

```
{{< button link="/path/to/page" text="Default Button" >}}
```
```
{{< button link="/path/to/page" style="secondary" text="Secondary Button" >}}
```
```
{{< button link="/path/to/page" style="tertiary" text="Tertiary Button" >}}
```

Options:
- link # (required) the button link
- text # (required) the button text
- style # (optional) secondary, tertiary

### Current Year

Insert the current year easily with this shortcode:

```
{{< current_year >}}
```

Useful for copyright notices and evergreen blog content.

### iFrame

Insert an iFrame with your desired content.

```
{{< iframe src="https://www.slideshare.net/slideshow/embed_code/key/vTNvkwIXN4pmr8" >}}
```

Options:
- src # (required) the page to display
- width # (optional)
- height # (optional)

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
npm run dev
```
