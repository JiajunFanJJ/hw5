function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (var i = 5; i < 400; i = i + 5) {
    line(i, 0, i, i * 2);
  }
}
