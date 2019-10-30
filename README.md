# SVG Icon System]

## Criteria 

1. Accessibility
2. Simplicity
2. Flexibility
3. Performance
4. Consistancy

### Accessibility

First and foremost, icons need to be accessible, icons should provide meaning in their use through contextual information such as `alt` attribute, `<title>`, or `aria` attributes.

### Simplicity

Should be simple and intuative to add named icons to a view. Names should be predictable and documented. Perhaps explict naming of sizes (e.g. `16-*.svg`) to organise icons based on draw scale.

Inclusion of an icon into a view should be abstracted into a standalone component which abstracts any SVG complexity to configuration options. 

For example:

```js
<Icon name="chevron">
```

### Flexibility

Provide configurable options to determine icon color, size, and configure `<svg>` attributes.

### Performance

- Cache
- DOM size (filesize and node count)

### Consistancy

Source SVG are named, organised, and structured to ensure consistancy. Interface (UI) icons should have mutiple variants 

| Size   | Description           |
| :----- | :-------------------- |
| `16px` | Small UI icon varient |
| `24px` | Default UI icon size  |
| `48px` | Dashboard/Marketing   |
| `64px` | Marketing             |
| `96px` | Marketing             |

***

## Creating SVGs

Anatomy of an `<svg>`

```html
<svg 
  xmlns="http://www.w3.org/2000/svg"
  width="24" 
  height="24" 
  viewBox="0 0 24 24"
  focusable="false">
    <title>arrow-down</title>
    ...
</svg>
```

| Attribute   | Description |
| :---------- | :---------- |
| `xmlns`     |             |
| `width`     |             |
| `height`    |             |
| `viewBox`   |             |
| `focusable` |             |

### SVG Shapes

https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

- `rect`
- `circle`
- `ellipse`
- `line`
- `polyline`
- `polygon`
- `path`

***

## Optimisation

SVG `path` cleanup automisation with CLI 

`svgo` 

*** 

## Sprites



### Generation

- [`svg-sprite`](https://www.npmjs.com/package/svg-sprite)
- [`svg-sprite-generator`](https://www.npmjs.com/package/svg-sprite-generator)



*** 

## Using SVGs

1. Embedded SVG `<svg>`
2. Linked SVG `<use>`
3. Image SVG `<img>`


### Embedded SVG `<svg>`

#### Pros

**✅ Pro:**

**✅ No Cache:** Icons are updated whenever the view is refreshed.

#### Cons

**🚫 No Cache:** Icons are included in view markup, therefore added to every request.

**🚫 DOM Size:** Repeated `<svg>` objects will duplicate shape/path notation throughout the DOM. Repeated icons will add extra markup and nodes to the DOM.

**🚫 Bundle Size:** Including a library of all  `<svg>` files could add excessive string values to the compiled JavaScript bundle.

### Linked SVG `<use>`

#### Pros

**✅ Cache:** 

**✅ Generation:** SVG sprites are fairly simple to generate from a directory of SVG source files.

#### Cons

**🚫 Page Size:** Embeds all SVG items in symbols on DOM. Increasing page load speed.

**🚫 [IE support](https://caniuse.com/#feat=svg):** TGhr `<use>` element is not supported in IE and requires [`svg4everybody`](https://github.com/jonathantneal/svg4everybody) polyfill adding to technical debt.

**🚫 Generation:** Standardisation required to allow for automated generation of spritesheets. Risk of complication when more variants are required in the future. Flexibility should be enacted here to allow for exrtra configuration later.

**🚫 Visibility:** It is difficult to visually check generated SVG spritesheets for path accuracy and rendering quaility. 

Althogh this could be bypassed with a quick render method, for example:

```js
const sprite = document.querySelector("#sprite");
const symbols = sprite.querySelectorAll("symbol");

symbols.forEach(symbol => {
  document.body.insertAdjacentHTML("beforeend", `
  <svg width="24" height="24">
     <use xlink:href="#${symbol.id}" />
  <svg>
`)
});
```

[Source](https://css-tricks.com/a-snippet-to-see-all-svgs-in-a-sprite/)


### Image SVG `<img>`

#### Pros

**✅Cache:** 

**✅Cache:** 

#### Cons

**🚫Color:** Color values would need to be stored in the source `file.svg`. Mutiple variants for each color would need to be created/generated.

Updating the color of an icon (e.g. in the instance of user interaction) would require another network request to download the asset. This also results in unnecessary visual jank.