## Zoomable grid system sketch

A sketch with a zoomable grid system

### Code w/ abstraction

#### Main component
Uses a `useInterval` hook that would provide basically the same as `useState` except it'd be exclusively for integers and would keep the value within those boundaries
```javascript
const [spaceLength, setSpaceLength] = useInterval(20, 100);

return (
  <Sketch width={550} height={600} bgColor="#141414">
    <Text 
      x={20}
      y={70}
      fontSize={32}
      fontStyle="bold"
      color="#ff5757"
    >
      Grid
    </Text>
    <Text
      align="center"
      fontSize={14}
      x={w => w / 2}
      y={20}
    >
      You can scroll or use the slider to trigger 'zoom' effect on grid
    </Text>
    <Slider 
      x={w => w * .75}
      y={50}
      min={20} 
      max={100} 
      step={1} 
      value={spaceLength} 
      onChange={e => setSpaceLength(e.target.value)}
    />
    <Grid spaceLength={value} />
  </Sketch>
);
```

#### Grid component

This component receives `spaceLength` as a prop and uses `CanvasContext`, which would be provided by the `Sketch` component to every component down the tree.

```javascript
const { width, height } = useContext(CanvasContext);

const rows = Math.ceil(width / spaceLength);
const cols = Math.ceil(height / spaceLength);

return (
  <>
    {
      for (let i = 0; i < this.rows; i++)
        for (let j = 0; j < this.cols; j++)
          list.push(
            <Square
              x={spaceLength * i}
              y={100 + spaceLength * j}
              length={spaceLength}
            />
          );
    }
  </>
);
```

### Code in pure p5.js

#### Main file
```javascript
const MIN_SPACE_LENGTH = 20;
const MAX_SPACE_LENGTH = 100;

let spaceLength = 50;
let grid, slider;

function setup() {
  createCanvas(550, 600);
  grid = new Grid(0, 80, 50);
  slider = createSlider(MIN_SPACE_LENGTH, MAX_SPACE_LENGTH, spaceLength, 1);
}

function draw() {
  background(color("#141414"));
  
  fill(color("#ff5757"));
  textSize(32);
  textStyle(BOLD);
  textAlign(LEFT);
  text("Grid", 20, 70);
  
  fill(color("#c2c2c2"));
  textSize(14);
  textStyle(NORMAL);
  textAlign(CENTER);
  text("You can scroll or use the slider to trigger 'zoom' effect on grid", width / 2, 20);

  slider.position(width * .75, 50);
  let v = slider.value();
  if (spaceLength !== v)
    updateSpaceLength(v);
  
  grid.draw();

}

function updateSpaceLength(value){
  spaceLength = value;
  
  if (spaceLength < MIN_SPACE_LENGTH)
    spaceLength = MIN_SPACE_LENGTH;
  if (spaceLength > MAX_SPACE_LENGTH)
    spaceLength = MAX_SPACE_LENGTH;
  
  slider.elt.value = spaceLength;

  grid.updateSpaceLength(spaceLength);
}

function mouseWheel({ delta }){
  updateSpaceLength(spaceLength - delta / 50);
  
  return false; // blocks page scrolling
}
```

#### Grid.js
```javascript
class Grid {

  constructor(x, y, spaceLength) {
    this.pos = { x, y };
    this.length = spaceLength;
    this.build();
  }

  build() {
    this.spaces = [];
    this.rows = width / this.length;
    this.cols = height / this.length;
    for (let i = 0; i < this.rows; i++) {
      let list = [];
      for (let j = 0; j < this.cols; j++) {
        list.push(
          new GridSpace(this.length * i, 100 + this.length * j, this.length)
        );
      }
      this.spaces.push(list);
    }
  }

  draw() {
    for (let i = 0; i < this.rows; i++)
      for (let j = 0; j < this.cols; j++)
        this.spaces[i][j].draw();
  }

  updateSpaceLength(length) {
    this.length = length;
    this.build();
  }

}
```

#### GridSpace.js
```javascript
class GridSpace {

  constructor(x, y, length) {
    this.pos = { x, y };
    this.length = length;
  }

  draw() {
    
    if (this.pos.x > width || this.pos.y > height)
      return;
    
    let bgColor;
    
    if (mouseX > this.pos.x && 
        mouseX < this.pos.x + this.length &&
        mouseY > this.pos.y &&
        mouseY < this.pos.y + this.length)
      bgColor = "#4b4b4b";
    else
      bgColor = "#3b3b3b";
    fill(color(bgColor));
    rect(this.pos.x, this.pos.y, this.length, this.length);
    
  }

}
```