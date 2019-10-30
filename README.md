# SVG Icon System]

## Criteria 

1. Accessibility
2. Flexibility
3. Performance
4. Consistancy

### Accessibility

Provide meaning to icon's use with contextual information such as `alt` attribute, `<title>`, or `aria` attributes.

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

https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

- `rect`
- `circle`
- `ellipse`
- `line`
- `polyline`
- `polygon`
- `path`

***

## Optimising SVGs

SVG `path` cleanup automisation with CLI 

`svgo` 

### Sprites



- [`svg-sprite`](https://www.npmjs.com/package/svg-sprite)
- [`svg-sprite-generator`](https://www.npmjs.com/package/svg-sprite-generator)

*** 

## Using SVGs

1. Embedded SVG `<svg>`
2. Linked SVG `<use>`
3. Image SVG `<img>`


### Embedded SVG `<svg>`



### Linked SVG `<use>`

#### Pros

**✅Cache:** 

#### Cons

**🚫Page size:** Embeds all SVG items in symbols on DOM. Increasing page load speed.

### Image SVG `<img>`

#### Pros

**✅Cache:** 

#### Cons

**🚫Color:** Color values would need to be stored in the source `file.svg`. Mutiple variants for each color would need to be created/generated.