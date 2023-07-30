# Dot-Org Hugo theme

This Hugo theme is ideal for powering the website of a small organization. It was built initially for the [TODO Group](https://todogroup.org/) and has the following strenghts:
- **Modern** - simple yet effective modern design
- **Accessible** - design and markup comply with WCAG 2.1 AA guidelines
- **Performant** - HTML/CSS/JS written from scratch to be as fast as possible without relying on frameworks or libraries
- **Multilingual** - ready to support multiple languages of content


## Using this theme

There are two methods of installing this theme:

### 1) Download it
Download files from this repository and add to your Hugo site.
Then open your hugo.toml file and add the following tag:

```theme: dot-org-hugo-theme```

### 2) Use git submodule

Run these commands to create a Hugo site with the dot-org-hugo-theme theme

```hugo new site your-site-name
cd your-site-name
git init
git submodule add https://github.com/cncf/dot-org-hugo-theme.git themes/dot-org-hugo-theme
echo "theme = 'dot-org-hugo-theme'" >> hugo.toml
hugo server
```

If you want to update the theme with the latest changes just run the command

```git submodule update --remote```

## Config files

TODO

## Custom shortcodes 

TODO

## Setting up a local instance for improving this theme

If you want to create improvements on this theme for everyone, follow these instructions. Note you must have [npm](https://www.npmjs.com/) and [Hugo](https://gohugo.io/) installed.


```
git clone https://github.com/cncf/dot-org-hugo-theme.git
cd dot-org-hugo-theme
npm install
npm run start
```
