let x = 0; 
let y = 0; 
let lines = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}
 
function draw() {
  // background(255,0,100); 
  
  // Draw a line 
  let x1 = random(width);  
  let y1 = random(height); 
  // let x1 = mouseX; 
  // let x1 = mouseX; 
  let x2 = random(width);
  let y2 = random(height);
  let color = random(100, 255);
  stroke(color);
  line(x1, y1, x2, y2); 
  // fill(255, 255, 255, 20); // Sets transparency 
  // ellipse(x1, y1, x2, y2); // Random  sized shape 
  
  // Write some text 
  let myText = "lines "+lines; 
  fill(0);
  textSize(width/20);
  textAlign(CENTER, CENTER);
  text(myText, width/2, height/2);
  lines++;
}