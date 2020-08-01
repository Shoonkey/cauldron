## Hooks

### useInterval(start, end)
Same as `useState`, but specifically for dealing with integers that must fit within a defined interval; values smaller than `start` are brought up and values greater than `end` are brought down.

### useBouncyCoordinate({ startAt?: [x, y], step? })
Would make it easier to implement bouncy behavior on canvas. By default, the coordinate would begin at (0, 0) and step 1 every frame. Probably doesn't make sense given that it would at least require info about the object's dimensions to properly bounce off the edges.