var rood = 10;
var vincent = "hallo";

function setup() {
  // put setup code here

  createCanvas(400,400);
  background(240); 
  console.log(vincent);
}

function draw() {
  background(0,400-mouseX,0)
  rood = random(255);
  blauw = random(255);
  groen = random(255);
  // put drawing code here
  //background(rood,groen,blauw, random(255));
  noStroke()
  fill(mouseX,mouseY,249);
  ellipse(200,200,mouseX,mouseY,);
  fill(0,mouseY,mouseX);
  rect (150,150,100,100);
  fill("black");
  ellipse(200,200,50,50);
  stroke ("yellow");
  strokeWeight(5)
  line (200,0,200,400);
  line (0,200,400,200);
  
  //console.log(vincent);
}