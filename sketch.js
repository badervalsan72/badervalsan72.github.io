function setup() {
  createCanvas(400, 400);
  background(0);
  x = new Square(); 
}

function draw() {
  x.show(); 
  x.expand();
}
