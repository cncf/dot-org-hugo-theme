---
title: Demo Elements Page
description: A demo page for the various markup elements in the Dot Org theme.
images: ["https://via.placeholder.com/250x200/d9d9d9/000000"]
---

This is a demo page, designed to show you the various elements of the theme and how they sit together.

It has a custom social image, which can be set in the frontmatter.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate get, arcu. In enim justo, rhoncus ut imperdiet a.

First here's how the Heading markup displays:

# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading

## Horizontal Rule

___


# Example Content

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.

## Table of contents (Shortcode)

{{< toc >}}

## Example Paragraph

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.

## [Header as a link](https://www.cncf.io)

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo [link text](http://google.com) ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate get, arcu. In enim justo, rhoncus ut imperdiet a.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.

## Example Intro Paragraph

{{< intro >}}
Donec pede justo, fringilla vel, aliquet nec, vulputate get, arcu. In enim justo, rhoncus ut imperdiet a. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
{{< /intro >}}

## Example Paragraph with Buttons

Donec pede justo, fringilla vel, aliquet nec, vulputate get, arcu. In enim justo, rhoncus ut imperdiet a. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 

{{< button link="/path/to/page" text="Default Button" >}}

Donec pede justo, fringilla vel, aliquet nec, vulputate get, arcu. In enim justo, rhoncus ut imperdiet a. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 

{{< button link="/path/to/page" text="Default Button" >}}

{{< button link="/path/to/page" style="secondary" text="Secondary Button" >}}

{{< button link="/path/to/page" style="tertiary" text="Tertiary Button" >}}

Donec pede justo, fringilla vel, aliquet nec, vulputate get, arcu. In enim justo, rhoncus ut imperdiet a. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 

Aenean commodo ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 

## Columns

Use responsive columns to layout your page structure. You can use the option count to have 2, 3 or 4 column layouts.

{{< columns count=2 >}}
{{< column >}}
### Column 1
Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo:

- Aenean commodo ligula get dolor.
- Aenean massa.
- Cum sociis natoque penatibus et.
- Magnis dis parturient montes.

{{< /column >}}
{{< column >}}
### Column 2
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula get dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate get, arcu. In enim justo, rhoncus ut imperdiet a.
{{< /column >}}
{{< /columns >}}

Here's a 4 column example:

{{< columns count=4 >}}
{{< column >}}
#### Column 1
{{< /column >}}
{{< column >}}
#### Column 2
{{< /column >}}
{{< column >}}
#### Column 3
{{< /column >}}
{{< column >}}
#### Column 4
{{< /column >}}
{{< /columns >}}

## Cards

Use the cards shortcode to display highlighted content on your page.

{{< cards >}}
{{< card >}}
## Something special
Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo
{{< spacer >}}
[Get our app](#)
{{< /card >}}
{{< card >}}
## Our special feature
Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo
{{< spacer >}}
[See our special feature](#)
{{< /card >}}
{{< /cards >}}

## YouTube standard (Hugo Shortcode) (not recommended)

{{< youtube QFSBC7G0URY >}}

Pulls from youtube-nocookie (based on config privacy settings) but still slows the page load down. Not recommended.

## YouTube Enhanced (with Playlists) (Shortcode)

{{< youtube_enhanced id="9oVr7rrNZVI" >}}

{{< youtube_enhanced id="xPSXtoJNGLs" title="Play Videos from Kubecon" playlistid="PLj6h78yzYM2PyrvCoOii4rAopBswfz1p7" >}}

## Vimeo standard (Hugo Shortcode) (not recommended)

The standard vimeo shortcode loads lots of tracking data and is slow, recommended to avoid this if possible.

{{< vimeo id="146022717" title="My vimeo video" >}}

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

## Blockquotes

Some text and then a quote:

> Blockquotes can be cool. Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo.

And also they can:

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

And then we have some indented code with a comment:

    // A comment.
    line 1 of code
    line 2 of code
    line 3 of code


And then we have some block code. They should all look pretty similar:

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

| Project | Date       |
|---------|------------|
| Alpha   | 2023-07-01 |
| Beta    | 2023-07-15 |
| Gamma   | 2023-08-01 |
| Delta   | 2023-08-15 |
| Epsilon | 2023-09-01 |

### Longer content table (using Shortcode):

{{< responsive_table >}}
| Option | Option | Description |
| ------ | ------ | ----------- |
| one    | data   | path to data files to supply the data that will be passed into templates. |
| two    | engine | engine to be used for processing templates. Handlebars is the default. |
| three  | ext    | extension to be used for dest files. |
{{< /responsive_table >}}

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica 

## Images

Images expand to fit the content width.

![This is alt text, please remember to set it](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Coming soon: Advanced image handling, lazy loading, etc.

## Gist

{{< gist thinhong 218cb565018eab7db50aa7cfd53c16c6 >}}

## Tweets

Embedding tweets like this loads lots of tracking scripts and is not recommended. Use a screenshot of the tweet and link the image to the real tweet. 

{{< tweet user="SanDiegoZoo" id="1453110110599868418" >}}

## Iframe

You can embed iFrame content simply using our shortcode:

{{< iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT6TcnSJki1RdzzDTbLCKDl96POVoW4bNZH--0lsJXNrPRRjPC83o2DGKuhZj38qjALnZJPLa0yhMW5/embed?start=false&loop=true&delayms=5000" >}}

## Footnotes

Footnote 1 link[^first].

Footnote 2 link[^second].

Duplicated footnote reference[^second].

[^first]: Footnote is here.

[^second]: Footnote text.

