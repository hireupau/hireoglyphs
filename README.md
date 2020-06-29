# Hireoglyphs

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

## Exporting

### Sketch App



### [Sketchtool CLI](https://developer.sketch.com/cli/)

To use the `sketchtool` CLI

```bash
alias sketchtool='/Applications/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool'
```


```bash
Usage: sketchtool export <document> [ --output=<path> | -o <path> ] [ --formats=<string> | -f <string> ] [ --items=<string> | -a <string> ] [ --item=<string> | -i <string> ] [ --scales=<path> | -s <path> ] [ --save-for-web{=YES|NO} | --no-save-for-web | -w {<YES|NO>} ] [ --overwriting{=YES|NO} | --no-overwriting | -V {<YES|NO>} ] [ --trimmed{=YES|NO} | --no-trimmed | -t {<YES|NO>} ] [ --background=<string> | -g <string> ] [ --group-contents-only{=YES|NO} | --no-group-contents-only | -G {<YES|NO>} ] [ --use-id-for-name{=YES|NO} | --no-use-id-for-name | -n {<YES|NO>} ] 

Export one or more layers

Arguments:

	document          sketch document to export from

Options:

	--output          Where to output the generated files - defaults to the current working directory (optional).
	--formats         List of formats to export as (optional).
	--items           List of artboard/slice names or ids to export. The default is to export all artboards/slices (optional).
	--item            The name or id of a single artboard/slice to export. (optional).
	--scales          List of scales to export at (optional).
	--save-for-web    Export web-ready images (optional, defaults to NO).
	--overwriting     Set this to YES to allow sketchtool to overwrite existing files with newly generated ones (optional, defaults to NO).
	--trimmed         Export images trimmed. (optional, defaults to NO).
	--background      Background colour to use when exporting slices (Replaces any background specified in the document). (optional).
	--group-contents- Export only layers that are contained within the group (optional, defaults to NO).
	--use-id-for-name Name exported images using their id rather than their name. (optional, defaults to NO).
```