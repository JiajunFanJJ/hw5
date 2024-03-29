function setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  for (var c = 50; c < 400; c = c + 100) {
    x.push(c);
    y.push(200);
    rectMode(CENTER);

    for (var i = 0; i < x.length; i = i + 20) {
      rect(x[i], y[i], 1 + (x.length - i), 1 + (x.length - i));
    }

    x = x.slice(-70); // remove all but the last 50 x values
    y = y.slice(-70); // remove all but the last 50 y values
  }
}
