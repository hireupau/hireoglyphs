# [Hireoglyphs](https://hireupau.github.io/hireoglyphs/)

Hireoglyphs is simple, friendly, and extensive icon library optimised for user interfaces with over 1,100 icons.

## Usage

Depending on your requirements Hireoglyphs contains optimised SVG icon assets to:

- Copy and paste `<path>` notation as embedded SVG icons
- Download and use SVG icons as an `<img>`
- Use a generated [SVG sprite](sprite.svg)

## Getting started

Extending Hireoglyphs with a new icon is simple with the following steps:

1. **Add** icon to a new artboard in the [Sketch](icons.sketch) file
2. **Export** icon to `/icons` directory
3. **Optimise** icon with `npm run svg` script

### Add an icon

Create a new `24px` artboard in the [Sketch](icons.sketch) file with the name of the icon desired. Icon names follow the structure:

- `{name}-{style}`
  - e.g. `house` and `house-outline` for general icons
- `{shape}-{name}-{style}`
  - e.g. `circle-warning` and `circle-warning-outline` for shape based icons

### Export icon

Before exporting ensure the icon has an empty fill color (`#000`), and is expanded and combinded to a single `<path>` to  minimise output notation.

Export the artboard as a named SVG file to the `/icons` directory e.g. `circle-warning-outline.svg`. The file name will be used for the SVG sprite symbol ID along with the name in the docs.

### Optmise icon

Running the `npm run svg` script will run:

1. `npm run svg-build` to run the [build.js](build.js) script which:
   - Optimise the SVG files in the `/icons` directory with [SVGO](https://github.com/svg/svgo)
   - Generate `icons.json` file used for website
2. `npm run svg-sprite` to generate [SVG sprite](sprite.svg) file

## Design

Hireoglpyh icons are drawn to `24px` artboards. The icons use intuitive and recognisable shapes in a soft and friendly style.

The icons are visually aligned to the center of the artboard (vertically and horizontally) and aligned to whole pixel values wherever possible for optmised rendering on screens.

### Styles

| Property                   | Value     |
| -------------------------- | --------- |
| `border-radius` (external) | `2px`     |
| `border-radius` (internal) | `1px`     |
| `line-cap`                 | `rounded` |
| `line-join`                | `rounded` |
| `stroke-width`             | `2px`     |

### Shapes

| Shape                  | Value                 |
| ---------------------- | --------------------- |
| Square                 | `20px` &times; `20px` |
| Circle                 | `22px` &times; `22px` |
| Polygon                | `22px` &times; `24px` |
| Rectangle (vertical)   | `16px` &times; `22px` |
| Rectangle (horizontal) | `22px` &times; `16px` |
