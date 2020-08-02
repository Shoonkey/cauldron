## Components

### Sketch (preload?)
Renders P5's canvas into the webpage. It also provides context (`CanvasContext`) to all elements down its tree, with a bunch of data about it like canvas `width` and `height`. The `preload` prop is a function that should do stuff before P5's canvas is setup on the website; it can be used for loading a font, for example.


### Rectangle (x, y, w, h, mode?)
Maps to P5's `rect` function. Would have a `mode` prop as well, that would change the `rectMode` when rendering this specific object.

### Ellipse (x, y, w, h, mode?)
Like rectangle, but maps to the `ellipse` function and `mode` changes P5's `ellipseMode`.

### Square (x, y, length)
Same as `Rectangle(x, y, length, length)`.

### Circle (x, y, r)
Same as `Ellipsis(x, y, r, r)`;

### Text (text, x, y, align?, fontSize?, fontStyle?, fontFamily?)
Renders text on the canvas. `fontFamily` only works within P5's canvas for [web safe fonts](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#Web_safe_fonts) or fonts imported with `loadFont`, which would be doable through a `preload` functional prop in the `Sketch` component.
