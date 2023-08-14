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

```
$ git clone https://github.com/cncf/dot-org-hugo-theme themes/dot-org-hugo-theme
```

This downloads the repo from GitHub and puts the contents in your themes folder.

To update your theme to future versions:

```
$ cd themes/dot-org-hugo-theme
$ git pull
```

## 2) Use git submodule

Inside the folder of your Hugo site run:

```
$ git submodule add https://github.com/cncf/dot-org-hugo-theme.git themes/dot-org-hugo-theme
```

This downloads the repo from GitHub and puts the contents in your themes folder as a git sub-module.

To update your theme to future versions:

```
$ git submodule update --remote --merge
```

## Installing dependencies 

Copy (at least) the following files from the themes to the root folder of your site.

- themes/dot-org-hugo-theme/exampleSite/package.json
- themes/dot-org-hugo-theme/exampleSite/postcss.config.js

After that, run this command (requires [node.js](https://nodejs.org/)).

```
$ npm install
```

You should also copy across the config folder or its contents to your root.

TODO

Add the following tag:

```theme: dot-org-hugo-theme```



## Config files

TODO

## Custom shortcodes 

TODO

## Setting up a local instance for improving this theme

If you want to create improvements on this theme for everyone, follow these instructions. Note you must have [npm](https://www.npmjs.com/) and [Hugo](https://gohugo.io/) installed.


```
git clone https://github.com/cncf/dot-org-hugo-theme.git
cd dot-org-hugo-theme/exampleSite
npm install
npm run start
```
