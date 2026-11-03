function setup() { // setup function
  createCanvas(windowWidth, windowHeight); // set canvas size
}

function draw() { // draw function
  // background
  background(255); //background colour
  // ears
  triangle(80, 80, 150, 30, 110, 5); // left ear
  triangle(320, 80, 250, 30, 290, 5); // right ear
  fill(255, 170, 190); // pink inner ear
  triangle(95, 70, 145, 40, 115, 20); // left inner ear
  triangle(305, 70, 255, 40, 285, 20); // right inner ear
  // face
  fill (255, 222, 52); // face colour
  circle(200, 200, 350); // face outline
  strokeWeight(7); // stroke weight
  // mouth
  arc(154, 250, 100, 100, 0.4, PI); // left side of mouth
  arc(246, 250, 100, 100, 0, PI- 0.4); // right side of mouth
  arc(110, 240, 30, 10, 1, PI - 0.2); // left mouth crease
  arc(295, 240, 30, 10, 0.5, PI - 0.4); // right mouth crease
  // eyes
  fill(0, 0, 0); // eye outline colour
  circle(135, 150, 75); // left eye outline
  circle(265, 150, 75); // right eye outline
  fill(255, 255, 255); // eye white colour
  circle (135, 150, 70); // left eye white
  circle (265, 150, 70); // right eye white
  fill(0, 0, 0); // pupil colour
  circle (135, 150, 5); // left pupil
  circle (265, 150, 5); // right pupil
  // eyebrows
  line (90, 110, 160, 90); // left eyebrow
  line (310, 110, 240, 90); // right eyebrow
  fill(255, 222, 52);
}
