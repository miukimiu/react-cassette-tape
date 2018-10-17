import p5 from "p5";
import "p5/lib/addons/p5.sound";

export default function sketch(p) {
  let mic;

  p.setup = function() {
    p.createCanvas(p.windowWidth + 20, 500);
    this.mic = new p5.AudioIn();

    // Create an Audio input
    mic = new p5.AudioIn();

    // start the Audio Input.
    mic.start();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, 500);
  };

  p.draw = function() {
    var yoff = 0.0;
    // Get the overall volume (between 0 and 1.0)
    var vol = mic.getLevel();

    p.background(255, 255, 255);
    p.stroke(25, 202, 144);
    p.fill(25, 202, 144);

    // We are going to draw a polygon out of the wave points
    p.beginShape();

    var xoff = 0; // Option #1: 2D Noise

    // Iterate over horizontal pixels
    for (var x = 0; x <= p.windowWidth; x += 10) {
      // Calculate a y value according to noise, map to

      //map(value,start1,stop1,start2,stop2)
      var y = p.map(p.noise(xoff, yoff), 0, 1, 200, 300);

      // Set the vertex
      p.vertex(x, y);
      // Increment x dimension for noise
      xoff += vol;
    }
    // increment y dimension for noise
    yoff += vol;
    p.vertex(p.windowWidth, p.windowHeight);
    p.vertex(0, p.windowHeight);
    p.endShape(p.CLOSE);
  };
}
