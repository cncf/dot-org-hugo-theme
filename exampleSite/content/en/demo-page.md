---
title: Demo Elements Page
description: A demo page for the various markup elements in the Dot Org theme.
images: ["https://via.placeholder.com/250x200/d9d9d9/000000"]
---

This is a demo page, designed to show you the various elements of the theme and how they sit together. The content doesn't mean anything.

It has a custom social image, which can be set in the frontmatter.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate get, arcu. In enim justo, rhoncus ut imperdiet a.

# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading

## Horizontal Rule

___


# Example Content

The introduction summarizes the purpose and function of the project, and should be concise (a brief paragraph or two). This introduction may be the same as the first paragraph on the project page.

## Table of contents (optional)

- Requirements
- Recommended modules
- Installation
- Configuration
- Troubleshooting
- FAQ
- Maintainers


## [Requirements](http://google.com)

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo [link text](http://google.com) ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate get, arcu. In enim justo, rhoncus ut imperdiet a.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.

Donec pede justo, fringilla vel, aliquet nec, vulputate get, arcu. In enim justo, rhoncus ut imperdiet a. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 

## Recommended modules (optional)

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.

{{< button link="/path/to/page" text="Default Button" >}}

Donec pede justo, fringilla vel, aliquet nec, vulputate get, arcu. In enim justo, rhoncus ut imperdiet a. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 

{{< button link="/path/to/page" text="Default Button" >}}

{{< button link="/path/to/page" style="secondary" text="Secondary Button" >}}

{{< button link="/path/to/page" style="tertiary" text="Tertiary Button" >}}

Donec pede justo, fringilla vel, aliquet nec, vulputate get, arcu. In enim justo, rhoncus ut imperdiet a. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 

{{< vimeo id="146022717" title="My vimeo video" >}}

Aenean commodo ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 

## YouTube Standard Hugo Shortcode

{{< youtube QFSBC7G0URY >}}

Pulls from youtube-nocookie (based on config privacy settings) but still slows the page load down.

## YouTube Enhanced Shortcodes includes Playlists

Install as you would normally install a contributed Drupal module. For further information, see [Installing Drupal Modules](https://www.drupal.org/docs/extending-drupal/installing-drupal-modules).

{{< youtube-enhanced id="9oVr7rrNZVI" >}}

{{< youtube-enhanced id="xPSXtoJNGLs" title="Play Videos from Kubecon" playlistid="PLj6h78yzYM2PyrvCoOii4rAopBswfz1p7" >}}

## Configuration (required)

1. Enable the module at Administration > Extend.
1. Profit.

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar


## Code

This is a paragraph but the words `Inline code` are actually inline code. Whoddathunkit.

And then we have some indented code:

    // A comment.
    line 1 of code
    line 2 of code
    line 3 of code


And then we have some block code. They should all look prettys similar:

```
Sample text here...
```

And finally some syntax highlighting, yes, out of the box:

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

### Short table:

| Project | Date       | Status   |
|---------|------------|----------|
| Alpha   | 2023-07-01 | Active   |
| Beta    | 2023-07-15 | Completed|
| Gamma   | 2023-08-01 | On Hold  |
| Delta   | 2023-08-15 | Active   |
| Epsilon | 2023-09-01 | Pending  |

### Longer content table:

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

### Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

## Gist

{{< gist thinhong 218cb565018eab7db50aa7cfd53c16c6 >}}

## Tweets

{{< tweet user="SanDiegoZoo" id="1453110110599868418" >}}

## Footnotes

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote is here.

[^second]: Footnote text.

