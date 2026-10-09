function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill (255, 222, 52);
  circle(200, 200, 350);
  strokeWeight(5);
  arc(154, 250, 100, 100, 0.4, PI);
  arc(246, 250, 100, 100, 0,PI-0.4);
  fill(0, 0, 0);
  circle(135, 150, 75);
  circle(265, 150, 75);
  fill(255, 255, 255);
  circle (135, 150, 70);
  circle (265, 150, 70);
  fill(0, 0, 0);
  circle (135, 150, 5);
  circle (265, 150, 5);
  line (90, 110, 160, 90);
  line (310, 110, 240, 90);
}
