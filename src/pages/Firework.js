import React from "react";
import Sketch from "react-p5";
import pp, { Vector } from "p5";
let particles = [];
let input;
let x = 50;
let y = 50;
// function mousePressed(p5) {
//   console.log("press" + p5);
//   p5.mouseHasPressed = true;
//   firework({
//     p5,
//     p: p5.createVector({ x: p5.mouseX, y: p5.mouseY }),
//     fireR: p5.random(0.2, 10),
//     particleR: p5.random(8, 30),
//   });
// }

// const firework = ({ p5, p, fireR, particleR }) => {
//   p5.push();
//   let baseHue = p5.random(300);

//   p5.colorMode("RGB");
//   let count = p5.random(60, 150);
//   for (let i = 0; i < count; i++) {
//     let hue = p5.random(0, 120);
//     let endHue = p5.random(0, 120);
//     let objParticle = new Particle({
//       p5,
//       p: p || p5.createVector(p5.width / 2, p5.height / 2),
//       v: Vector.random2D().mult(p5.random(2, fireR || 5)),
//       a: p5.createVector(0, 0.08),
//       r: (particleR && p5.random(particleR / 2, particleR)) || p5.random(40),

//       color: p5.color((baseHue + hue) % 360, 360, 360),
//       endColor: p5.color((120 + baseHue + endHue) % 360, 360, 360),
//     });
//     particles.push(objParticle);
//   }
//   p5.pop();
// };

// const setup = (p5, canvasParentRef) => {
//   // use parent to render the canvas in this ref
//   // (without that p5 will render the canvas outside of your component)
//   p5.createCanvas(1000, 500).parent(canvasParentRef);
//   p5.background(255, 204, 0);
//   // p5.fill(0);
//   p5.rect(0, 0, p5.width, p5.height);
//   firework({ p5 });

//   p5.pixelDensity(2);
// };

// const draw = (p5) => {
//   p5.fill(0, 8);
//   p5.rect(0, 0, p5.width, p5.height);
//   p5.push();
//   //   p5.blendMode("SCREEN");
//   for (let objParticle of particles) {
//     objParticle.update();
//     objParticle.draw();
//   }
//   p5.pop();
//   if (!p5.mouseHasPressed) {
//     if (p5.frameCount % 15 == 0) {
//       firework({
//         p5: p5,
//         p: p5.createVector(p5.random(p5.width), p5.random(p5.height)),
//       });
//     }
//   }
//   particles = particles.filter((obj) => obj.p.y < p5.height && obj.r > 0.01);

//   if (p5.frameCount - p5.lastTs > 5) {
//     p5.lastTs = p5.frameCount;
//     firework({
//       p5: p5,
//       p: p5.createVector(p5.random(p5.width), p5.random(p5.height)),
//       fireR: p5.random(0.1, 5),
//       fireR: p5.random(0.5, 8),
//     });
//   }
// };
export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background("rgba(0,0,0,0)");
    p5.ellipse(x, y, 70, 70);
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
  };
  return <Sketch setup={setup} draw={draw} />;
};

class Particle {
  constructor(args) {
    let def = {
      p5: args.p5,
      p: args.p5.createVector(0, 0),
      v: args.p5.createVector(0, 0),
      a: args.p5.createVector(0, 0),
      color: args.p5.color("white"),
      endColor: args.p5.color("blue"),
      r: 10,
      curve: args.p5.random(5),
      curveFreq: args.p5.random(2, 40),
      rFadeRatio: args.p5.random(0.88, 0.99),
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    //顯示
    this.p5.push();
    this.p5.noStroke();
    this.p5.translate(
      this.p.x + this.p5.sin(this.p.y / this.curveFreq) * this.curve,
      this.p.y + this.p5.cos(this.p.x / this.curveFreq) * this.curve
    );
    this.p5.fill(this.color);
    this.p5.circle(0, 0, this.r);

    let copyColor = this.p5.color(this.color.toString());
    copyColor.setAlpha(6);
    for (var i = 0; i < 50; i += 10) {
      this.p5.fill(copyColor);
      this.p5.circle(0, 0, (this.r * i) / 15);
    }
    this.p5.pop();
  }
  update() {
    //資料更新
    this.p.add(this.v);
    this.v.add(this.a);
    this.r *= this.rFadeRatio;
    this.color = this.p5.lerpColor(this.color, this.endColor, 0.02);
  }
}
