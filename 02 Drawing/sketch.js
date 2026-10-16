let x = 0; 
let y = 0; 
let lines = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10000);
}
 
function draw() {

  
  // Draw a line 
  let x1 = random(width);  
  let y1 = random(height); 
  let x2 = random(width);
  let y2 = random(height);
  let color = random(100, 255);
  let red = random (0, 255);
  let green = random (0, 255);
  let blue = random (0, 255);
  stroke(color);
  
  fill(red, green, blue, 255); // Sets transparency 
  ellipse(x1, y1, x2, y2); // Random  sized shape 
  
  // Write some text 
  let myText = "Circles "+lines; 
  fill(0);
  textSize(width/20);
  textAlign(CENTER, CENTER);
  text(myText, width/2, height/2);
  lines++;
}