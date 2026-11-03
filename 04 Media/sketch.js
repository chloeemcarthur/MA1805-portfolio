// set global variables
let overlayImage; // set a variable to hold the overlay image
let video; // set a variable to hold the video
let reactionSound; // set a variable to hold the reaction sound
let videoStarted = false; // set a flag to track if the video has started
let reactionEnabled = false; // set a flag to track if the reaction is enabled

function preload() { // preload function
  overlayImage = loadImage('PointingWojakOverlay.png'); // load the overlay image
  reactionSound = loadSound('Scream.m4a'); // load the reaction sound
} // end of preload function

function setup() { // setup function
  createCanvas(windowWidth, windowHeight); // create a canvas that fills the window
  video = createVideo('Endgame.mp4'); // load the video
  video.hide(); // hide the video element
} // end of setup function

function draw() { // draw function
  background(255); // set background to white
  image(video, 0, 0, width, height); // draw the video on the canvas

  if (!videoStarted) { // check if the video has not started yet
    fill(0); // set fill color to white
    noStroke(); // disable stroke
    textAlign(CENTER, CENTER); // set text alignment to center
    textSize(24); // set text size
    text("Click to start watching", width / 2, height / 2); // display the message in the center of the canvas
  } // end of if statement
  
  if (videoStarted) { // check if the video has started
    // draw a translucent black rectangle at the bottom of the canvas
    noStroke(); // disable stroke
    fill (0, 160); // set fill color to black and 160 alpha
    rect (0, height - 65, width, 65); // draw the rectangle
    // draw the text on top of the rectangle
    fill(255); // set fill color to white
    textSize(20); // set text size
    textAlign(CENTER, CENTER); // set text alignment to center
    text("Hold down the mouse when you see a character (or anything else) that you recognise!", width / 2, height - 32.5); // display the message in the center of the rectangle
  } // end of if statement
  
  // Show the Wojaks only while the mouse is held down
  if (reactionEnabled) { // check if the reaction is enabled
    if (mouseIsPressed) { // check if the mouse is pressed
      image(overlayImage, 0, 0, width, height); // draw the overlay image on top of the video
      if (!reactionSound.isPlaying()) { // check if the reaction sound is not playing
        reactionSound.play(); // play the reaction sound
      } // end of if statement
  } // end of if statement
} // end of if statement
} // end of draw function

function mousePressed() { // mousePressed function
    if (!videoStarted) { // check if the video has not started yet
        video.play(); // play the video
    videoStarted = true; // set the videoStarted flag to true
  } // end of if statement
} // end of mousePressed function

function mouseReleased () { // mouseReleased function
  reactionSound.stop(); // stop the reaction sound
  if (videoStarted) { // check if the video has started
    reactionEnabled = true; // toggle the reactionEnabled flag
  } // end of if statement
} // end of mouseReleased function

function windowResized() { // windowResized function
  resizeCanvas(windowWidth, windowHeight); // resize the canvas to fit the new window size
} // end of windowResized function