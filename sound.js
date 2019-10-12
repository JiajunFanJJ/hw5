var mySound;

function preload() {
  soundFormats("wav");
  mySound = loadSound("cuttingsound.wav");
}

function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }
  
  if (h > 100) {
    fill(340, random(100), 100);
    ellipse(random(400), random(100, 180), 10);
  }
  
  // mouseleft control lawnmower
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      fill(255);
      rect(0, 0, width, height-15);
      h = 10;
      mySound.play();
    }
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
