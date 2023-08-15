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

TODO

## Setting up a local instance for improving this theme

If you want to create improvements for this theme for everyone, follow these instructions to launch the exampleSite. 

```bash
git clone https://github.com/cncf/dot-org-hugo-theme.git
cd dot-org-hugo-theme/exampleSite
npm install
npm run dev
```
