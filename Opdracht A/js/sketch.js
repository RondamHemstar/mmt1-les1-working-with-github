
function setup() {
  // put setup code here
  createCanvas(500,500)
  background(240)
}

function draw() {
  // put drawing code here
  noStroke();
  fill ("red");
  rect (50,100,50,50);
  fill("yellow");
  rect (150,100,50,50);
  fill("cyan");
  rect (250,100,50,50);
  fill("lime");
  rect (350,100,50,50);
  stroke(0);
  fill("white")
  rect (50,200,50,50);
  fill(200);
  rect (150,200,50,50);
  fill(150);
  rect (250,200,50,50);
  fill(100);
  rect (350,200,50,50);
}