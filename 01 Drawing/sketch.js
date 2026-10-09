function setup() {
  createCanvas(400, 400); // canvas size
}

function draw() {
  background(255); //background colour
  fill (255, 222, 52); // face colour
  circle(200, 200, 350); // face outline
  strokeWeight(7); // stroke weight
  arc(154, 250, 100, 100, 0.4, PI); // left side of mouth
  arc(246, 250, 100, 100, 0, PI-0.4); // right side of mouth
  fill(0, 0, 0); // eye outline colour
  circle(135, 150, 75); // left eye outline
  circle(265, 150, 75); // right eye outline
  fill(255, 255, 255); // eye white colour
  circle (135, 150, 70); // left eye white
  circle (265, 150, 70); // right eye white
  fill(0, 0, 0); // pupil colour
  circle (135, 150, 5); // left pupil
  circle (265, 150, 5); // right pupil
  line (90, 110, 160, 90); // left eyebrow
  line (310, 110, 240, 90); // right eyebrow
}
