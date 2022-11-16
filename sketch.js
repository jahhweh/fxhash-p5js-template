
function setup() { 
  console.log('fxhash: ', fxhash)
  randomSeed(int(fxrand()*987654321));
  
  frameRate(60)

  createCanvas(400, 400);
} 

function draw() { 

  background(220);

  randomColoredSquare()
  randomColoredCircle()

}

function randomColoredSquare() {

  frameRate(1)

  let red = random(0,255);
  let blue = random(0,255);
  let green = random(0,255);
  let alpha = random(0,255);

  fill(red, blue, green, alpha);
  rectMode(CENTER)
  rect(width/2,height/2,100,100)

}

function randomColoredCircle() {

  frameRate(1)

  let red = random(0,255);
  let blue = random(0,255);
  let green = random(0,255);
  let alpha = random(0,255);

  fill(red, blue, green, alpha);
  rectMode(CENTER)
  ellipse(width/2,height/2,100,100)

}