function setup() { // setup function
  createCanvas(970, 970); // canvas size
}

function draw() { // draw function
  background(40); // background color
  let i=0; // initialize i to 1
  while(i<= 100){ // while loop to draw squares for grid
    square (i*80+10, 10, 70); // draw row at y=10
    square (i*80+10, 90, 70); // draw row at y=90
    square (i*80+10, 170, 70); // draw row at y=170
    square (i*80+10, 250, 70); // draw row at y=250
    square (i*80+10, 330, 70); // draw row at y=330
    square (i*80+10, 410, 70); // draw row at y=410
    square (i*80+10, 490, 70); // draw row at y=490
    square (i*80+10, 570, 70); // draw row at y=570
    square (i*80+10, 650, 70); // draw row at y=650
    square (i*80+10, 730, 70); // draw row at y=730
    square (i*80+10, 810, 70); // draw row at y=810
    square (i*80+10, 890, 70); // draw row at y=890
  i++; // increment i by 1
}
}
