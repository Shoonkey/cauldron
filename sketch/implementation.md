# Implementation ideas

A bunch of brainstormed thoughts and examples about how transforming React syntax into a functional P5 sketch could be implemented.

## The gist of it

  Every base element from the lib (Text, Circle, Rectangle, etc.) would transform, behind the scenes, 
the element to an internally understandable format, which defines variables, constants and callbacks 
needed for that specific object.

  The callbacks (preload, setup, draw) would be appended, in order, to a single executable function 
from the parent element (ideally the Sketch component). The variables and constants would be 
available through the `store` variable, provided as the callback's second argument, right after 
`sketch`, which is the P5 object.

For example, this chunk of JSX code
```xml
<Text 
  x={20}
  y={70}
  fontSize={32}
  fontStyle="bold"
  color="#ff5757"
>
  Grid
</Text>
```
would produce something like this object:
```js
{
  draw: (sketch, store) => {
    sketch.fill(color(color));
    sketch.textStyle(sketch[fontStyle.toUpperCase()]);
    sketch.textSize(fontSize);
    sketch.text(children[0], x, y);
  }
}
```

A very complex element would generate a more complete object like this:
```js
{
  constants: {
    CONSTANT_EXAMPLE: 30
  },
  variables: {
    x: 0
  },
  preload: sketch => {
    sketch.loadFont("font.ttf");
  },
  setup: (sketch, store) => { /* setup code */ }
  draw: (sketch, store) => { /* animation code */ }
}
```

## Using a hook to use a variable within the sketch context

An `useVariable` hook that would allow the P5 React lib to know this variable will have to be created,
and could be used through the reference given by the hook. 

```js
function TextParent({ children }){
  const [fontSize, setFontSize] = useVariable("lol", 0);

  return (
    <Text fontSize={fontSize}>
      { children[0] }
    </Text>
  );

}
```