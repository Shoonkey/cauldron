## Bouncy animation sketch

A basic sketch with a circle going through the canvas diagonally from top left to bottom right, and bouncing of the sides.

#### Code w/ abstraction

`useBouncyCoordinate` would be a useful hook to implement bouncy behavior faster. Like most components nested inside `Sketch`, it would need to somehow affect code on P5's `draw` function, or have those variables change at reasonably the same pace than that function.

```javascript
const [x, y] = useBouncyCoordinate({ 
  startAt: [10, 10],
  step: 2
});

return (
  <Sketch background="#1b1b1b">
    <Circle x={x} y={y} size={20}>
  </Sketch>
);
```

#### Code in pure p5.js
```javascript
let x = 10, y = 10, factorX = 1, factorY = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(color("#1b1b1b"));
  ellipse(x, y, 20, 20);

  x += 2 * factorX; 
  y += 2 * factorY;

  if (x - 10 <= 0 || x + 10 >= width)
    factorX = -factorX;
  if (y - 10 <= 0 || y + 10 >= height)
    factorY = -factorY;
}
```