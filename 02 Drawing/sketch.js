// global variables
let x = 0; // set X variable
let y = 0; // set Y variable
let lines = 0; // set line counter

function setup() {
  // setup canvas and frame rate
  createCanvas(windowWidth, windowHeight); // create canvas
  frameRate(10000); // set frame rate
}
 
function draw() {
  // draw random coloured ellipses
  let x1 = random(width);  // set x1 variable to random width
  let y1 = random(height); // set y1 variable to random height
  let x2 = random(width);  // set x2 variable to random width
  let y2 = random(height); // set y2 variable to random height
  let red = random (0, 255); // set red variable to random colour
  let green = random (0, 255); // set green variable to random colour
  let blue = random (0, 255); // set blue variable to random colour
  fill(red, green, blue, 255); // fill ellipse with random colour
  ellipse(x1, y1, x2, y2); // Random  sized shape 
  
  // create ellipse counter
  let myText = "Circles "+lines; // set text variable
  fill(0); // set text colour
  textSize(width/20); // set text size
  textAlign(CENTER, CENTER); // set text alignment
  textFont ("Comic Sans MS"); // set text font
  text(myText, width/2, height/2); // display text in centre of canvas 
  lines++; // increment line counter
}