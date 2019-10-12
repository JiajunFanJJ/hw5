function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (var i = 10; i <= 200; i = i + 10) {
    line(210 - i, i, 190 + i, i);
  }
  
  for (var c = 10; c <= 200; c = c + 10) {
    line(0 + c, 190 + c, 400 - c, 190 + c);
  }
}
