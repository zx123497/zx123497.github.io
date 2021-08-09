let particles = [];
let input;
function firework({ p, fireR, particleR }) {
  push();
  let baseHue = random(300);

  colorMode(HSB);
  let count = random(60, 150);
  for (let i = 0; i < count; i++) {
    let hue = random(0, 120);
    let endHue = random(0, 120);
    let objParticle = new Particle({
      p: (p && p.copy()) || createVector(width / 2, height / 2),
      v: p5.Vector.random2D().mult(random(2, fireR || 5)),
      a: createVector(0, 0.08),
      r: (particleR && random(particleR / 2, particleR)) || random(40),

      color: color((baseHue + hue) % 360, 360, 360),
      endColor: color((120 + baseHue + endHue) % 360, 360, 360),
    });
    particles.push(objParticle);
  }
  pop();
}

function setup() {
  createCanvas(1000, 1000);
  background(100);
  fill(0);
  rect(0, 0, width, height);
  firework({});

  input = new p5.AudioIn();
  input.start();
  pixelDensity(2);
}
let lastTs = 0;
let mouseHasPressed = false;
function draw() {
  let volume = input.getLevel();
  let speaking = volume > 0.15;

  fill(0, 8);
  rect(0, 0, width, height);
  push();
  blendMode(SCREEN);
  for (let objParticle of particles) {
    objParticle.update();
    objParticle.draw();
  }
  pop();
  if (!mouseHasPressed) {
    if (frameCount % 15 == 0) {
      firework({
        p: createVector(random(width), random(height)),
      });
    }
  }
  particles = particles.filter((obj) => obj.p.y < height && obj.r > 0.01);

  // fill(0)
  // rect(0,0,400,200)
  // fill(255)
  // textSize(200)

  // text(speaking,50,180)

  if (speaking && frameCount - lastTs > 5) {
    lastTs = frameCount;
    firework({
      p: createVector(random(width), random(height)),
      fireR: random(0.1, 5),
      fireR: random(0.5, 8),
    });
  }
}
function mousePressed() {
  mouseHasPressed = true;
  firework({
    p: createVector(mouseX, mouseY),
    fireR: random(0.2, 10),
    particleR: random(8, 30),
  });
}

class Particle {
  constructor(args) {
    let def = {
      p: createVector(0, 0),
      v: createVector(0, 0),
      a: createVector(0, 0),
      color: color("red"),
      endColor: color("yellow"),
      r: 10,
      curve: random(5),
      curveFreq: random(2, 40),
      rFadeRatio: random(0.88, 0.99),
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    //顯示
    push();
    noStroke();
    translate(
      this.p.x + sin(this.p.y / this.curveFreq) * this.curve,
      this.p.y + cos(this.p.x / this.curveFreq) * this.curve
    );
    fill(this.color);
    circle(0, 0, this.r);

    let copyColor = color(this.color.toString());
    copyColor.setAlpha(6);
    for (var i = 0; i < 50; i += 10) {
      fill(copyColor);
      circle(0, 0, (this.r * i) / 15);
    }
    pop();
  }
  update() {
    //資料更新
    this.p.add(this.v);
    this.v.add(this.a);
    this.r *= this.rFadeRatio;
    this.color = lerpColor(this.color, this.endColor, 0.02);
  }
}
