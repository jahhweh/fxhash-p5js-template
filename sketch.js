//
// Welcome to the sketch.js file! This is where we do our creative coding.
//

// setup runs once when we first start the program or "Go Live"
function setup() { 

  // right click in the window and select "Inspect"
  // along the top menu, select "Console"
  // this is where the "console.log" lines show up
  // you can view variables about your project easily
  // it will help when you troubleshoot problems
  console.log('fxhash: ', fxhash)
  // this first console.log writes out the phrase "fxhash: "
  // and then shows us the hash that fxhash generated for us


  // this creates a seed using our fxhash that p5js will use 
  // as a base for when we call the random function
  // this ensures the same outcome for each hash
  randomSeed(int(fxrand()*987654321));
  

  // this sets the frame rate to 60 frames per second
  frameRate(60)


  // this creates our Canvas which is the area in which we create
  // this is the area that appears on fxhash
  createCanvas(400, 400);
} 


// after we setup, we draw!
// the draw function loops forever unless we tell it to stop
function draw() { 


  // this line makes the background of our canvas to white
  // the color is based on a range from 0 to 255
  // 0 being black and 255 being white
  background(255);


  // this runs the function that creates a randomly colored square
  randomColoredSquare()


  // this runs the function creates a randomly colored circle
  randomColoredCircle()

}


// this is the function that creates a randomly colored square
function randomColoredSquare() {


  // first we set the frame rate to 1 frame per second
  // otherwise our square will change color 60 times per second
  frameRate(1)

  // this is where we define the variables that will make up the color
  // we are using RGBA colors which have a range between 0 to 255
  // when we combine the red, blue, and green variables we get a color!
  // the alpha variable changes the colors opacity, or how see-through it is.
  // we tell our program that we want a random number for each color and its alpha
  let red = random(0,255);
  let blue = random(0,255);
  let green = random(0,255);
  let alpha = random(0,255);


  // once our numbers are chosen, we use the fill function to "fill our paint bucket"
  fill(red, blue, green, alpha);

  // this tells p5js that we want to use the center of the square as our middle point
  // otherwise p5js will use the top-left corner of the square as our middle point
  rectMode(CENTER)

  // this is where we do the actual "painting" on the canvas
  // until now, our canvas is completely blank
  // we tell p5js to make a rectangle, position it in the middle of our screen
  // and make the size 100 pixels wide by 100 pixels high
  rect(width/2,height/2,100,100)
}


// this is the function that creates a randomly colored circle
function randomColoredCircle() {
  frameRate(1)
  let red = random(0,255);
  let blue = random(0,255);
  let green = random(0,255);
  let alpha = random(0,255);
  fill(red, blue, green, alpha);


  // we tell p5js that we want the center of our circle to be in the middle
  // rather than the circles top-left corner (yes, the circles top left corner lol)
  // p5js calls circles ellipses. 
  ellipseMode(CENTER)


  // lets draw a circle instead of a square!
  // place it in the middle of the canvas
  // and make its diameter 100 pixels
  circle(width/2,height/2,100)
}

// and thats the end!
// play around with all the variables
// then go to the p5js website
// and see what else you can do!