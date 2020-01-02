# SVG Icon System

## Criteria

1. Accessibility
2. Simplicity
3. Flexibility
4. Performance
5. Consistancy

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

| Size    | Description           |
| :------ | :-------------------- |
| `16px`  | Small UI icon varient |
| `24px`  | Default UI icon size  |
| `32px`  | Large UI icon size    |
| `48px`  | Dashboard/Marketing   |
| `64px`  | Marketing             |
| `96px`  | Marketing             |
| `128px` | Marketing             |

---

## Creating SVGs

Anatomy of an `<svg>`

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  focusable="false"
>
  ...
</svg>
```

| Attribute   | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| `xmlns`     | XML namespace required for viewing SVG files in MacOS preview |
| `width`     | Width value                                                   |
| `height`    | height value                                                  |
| `viewBox`   | Coordinates for the artboard around the icon                  |
| `focusable` | Attribute to remove focus in IE                               |

Relevant articles:

- [Using ARIA to enhance SVG accessibility](https://developer.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/)
- [Accessible SVGs](https://css-tricks.com/accessible-svgs/)

### SVG Shapes

https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

- `rect`
- `circle`
- `ellipse`
- `line`
- `polyline`
- `polygon`
- `path`

---

## Optimisation

Exported SVG files can be optimised further with the use of `svgo` a command line interface (CLI) tool which reduces the complexity of markup within a `<svg>`.

---

## Sprites

SVG sprites allow for mutiple icons to be linked within the same SVG source. It achieves this by naming each icon as a named `<symbol>`.

### Generation

SVG sprites can be generated from a directory or list of source SVG files. This means that the generation of sprites can be automated.

#### Existing solutions:

- [`svg-sprite`](https://www.npmjs.com/package/svg-sprite)
- [`svg-sprite-generator`](https://www.npmjs.com/package/svg-sprite-generator)

---

## Using SVGs

1. Embedded SVG `<svg>`
2. Linked SVG `<use>`
3. Image SVG `<img>`

### Embedded SVG `<svg>`

```html
<svg width="24" height="24" viewBox="0 0 24 24">
  <path d="..." />
</svg>
```

#### Pros

**✅ Styling:** embedded `<svg>` elements can be styled from inherited CSS or defined classes.

**✅ No Cache:** icons are updated whenever the view is refreshed.

#### Cons

**🚫 No Cache:** icons are included in view markup, therefore added to every request.

**🚫 DOM Size:** repeated `<svg>` objects will duplicate shape/path notation throughout the DOM. Repeated icons will add extra markup and nodes to the DOM.

**🚫 Bundle Size:** including a library of all `<svg>` files could add excessive string values to the compiled JavaScript bundle.

### Linked SVG `<use>`

```html
<svg width="24" height="24">
  <use xlink:href="#..." />
</svg>
```

#### Pros

**✅ Cache:** SVG Sprites can be linked externally meaning that the request for the SVG spritesheet containing all `<symbol>` elements.

**✅ Styling:** linked `<svg>` elements can be styled from inherited CSS or defined classes.

**✅ Generation:** SVG sprites are fairly simple to generate from a directory of SVG source files.

#### Cons

**🚫 Cache:** depending on cache headers, the external SVG source can cause issues when updated with new icons not displaying and updated icons showing old source.

If documented correctly, or cache-busted on deployment this could be mitigated against.

**🚫 Naming:** without a naming convention there is a risk that icon names will be repeated causing conflicts. Explicit naming may be required for icons with the same name but different size/style, for example, `16-chevron`, `24-chevron`, `chevron-stroke`, `chevron-fill` etc.

An abstracted naming convention would need to be considered amoungst all teams within the product, in order to cement a consistant and scalable convention.

**🚫 [IE support](https://caniuse.com/#feat=svg):** the `<use>` element is not supported in IE and requires [`svg4everybody`](https://github.com/jonathantneal/svg4everybody) polyfill adding to technical debt.

**🚫 Generation:** Standardisation required to allow for automated generation of spritesheets. Risk of complication when more variants are required in the future. Flexibility should be enacted here to allow for exrtra configuration later.

**🚫 Visibility:** It is difficult to visually check generated SVG spritesheets for path accuracy and rendering quaility.

Althogh this could be bypassed with a quick render method, for example:

```js
const sprite = document.querySelector('#sprite');
const symbols = sprite.querySelectorAll('symbol');

symbols.forEach(symbol => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `
  <svg width="24" height="24">
     <use xlink:href="#${symbol.id}" />
  <svg>
`
  );
});
```

[Source](https://css-tricks.com/a-snippet-to-see-all-svgs-in-a-sprite/)

### Image SVG `<img>`

```html
<img width="24" height="24" src="example.svg" alt="Descriptive text for example" />
```

#### Pros

**✅ Cache:** icon files would be cached for mutiple uses of the same icon source.

**✅ Accessibility:** `<img>` elements with a descriptive `alt` attribute would provide suitable context for accessibility. **[Confirm with @Matt Stow]**

#### Cons

**🚫 Network requests:** each icon would add another network request to page load.

**🚫 Color:** Color values would need to be stored in the source `file.svg`. Mutiple variants for each color would need to be created/generated.

Updating the color of an icon (e.g. in the instance of user interaction) would require another network request to download the asset. This also results in unnecessary visual jank.
