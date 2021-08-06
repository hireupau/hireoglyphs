# [Hireoglyphs](https://hireupau.github.io/hireoglyphs/)

## Naming

### Symbols

`svg--{name}-{style}`

eg. `svg-image-outline`

### Shapes

`svg--{shape}-{symbol}-{style}`

eg. `svg-circle-warning-outline`

## Design

### Personality

- **Obvious:** intuitive and recognisable
- **Friendly:** soft and friendly

### Geometry

#### Alignment

- Align anchors and paths to whole pixel values wherever possible
- Icons should be visually aligned to the center of the artboard both vertically and horizontally.

### Styles

| Property                   | Value     |
| -------------------------- | --------- |
| `border-radius` (external) | `2px`     |
| `border-radius` (internal) | `1px`     |
| `line-cap`                 | `rounded` |
| `line-join`                | `rounded` |
| `stroke-width`             | `2px`     |

### Size

| Property | Value  |
| -------- | ------ |
| Artboard | `24px` |

### Shape

| Shape                  | Value                 |
| ---------------------- | --------------------- |
| Square                 | `20px` &times; `20px` |
| Circle                 | `22px` &times; `22px` |
| Polygon                | `22px` &times; `24px` |
| Rectangle (vertical)   | `16px` &times; `22px` |
| Rectangle (horizontal) | `22px` &times; `16px` |

### Drawing

- Expand paths
- Combine shapes
- Empty fill (`#000`)
