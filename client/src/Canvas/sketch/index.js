let x = 10, y = 10, factorX = 1, factorY = 1;

export function setup(sk, parent){
  sk.createCanvas(sk.windowWidth, sk.windowHeight).parent(parent);
}

export function draw(sk){
  sk.background(0);
  sk.ellipse(x, y, 20, 20);

  x += 2 * factorX; 
  y += 2 * factorY;

  if (x - 10 <= 0 || x + 10 >= sk.windowWidth)
    factorX = -factorX;
  if (y - 10 <= 0 || y + 10 >= sk.windowHeight)
    factorY = -factorY;
  
}