let overlayImage;
let video;

function preload() { // preload function}
  overlayImage = loadImage('PointingWojakOverlay.png'); // load the overlay image
}

function setup() { // setup function
  createCanvas(windowWidth, windowHeight); // create a canvas that fills the window
}

function draw() { // draw function
  image(overlayImage, 0, 0); // draw the overlay image at the top-left corner of the canvas
}
