//https://www.openprocessing.org/sketch/157576
let num = 1200;
let noiseScale = 800;
let noiseStrength = 2; // default 500, 1
let noiseOffset;
let particles = [num];
let maxSize = 1;
let heightStrength = 900;
let stepSmoothing = 2;
let alphaValue = 71;
let backgroundColor = 255;
let tailLength = 40;
let lifeSpanBase = 8000;
let seed = 0;
let minSpeed = 5;
let maxSpeed = 10;

let debug = true;
let scroll = 0;
let settingsIndex = 0;

let orbitCtrl = true;

let colorPalette = [
  "#13232D",
  "#4DBEFF",
  "#879094",
  "#A0A7AC",
  "#B8BDC0",
  "#CDD1D3",
  "#E7E9EA",
];

let curatedSettings = [
  {
    seed: 5071,
    minSpeed: 5,
    maxSpeed: 15,
    num: 1000,
    noiseScale: 1200,
    noiseStrength: 2,
    maxSize: 1,
    heightStrength: 900,
    stepSmoothing: 2,
    alphaValue: 71,
    backgroundColor: 255,
    tailLength: 40,
    lifeSpanBase: 8000,
    cameraSettings: {
      x: 0,
      y: -2400,
      z: -900,
      centerX: 0,
      centerY: 0,
      centerZ: 0,
      upX: 0,
      upY: 1,
      upZ: 0,
    },
  },
];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  loadSettings(settingsIndex);
  noStroke();
  noiseOffset = createVector(500, 1000);
  if (debug) {
    seed = Math.trunc(random(1, 10000));
    console.log(seed);
  }
  noiseSeed(seed);
  spawnParticles();
  frameRate(30);
}
//good seed 7863, 9898
function loadSettings(index) {
  s = curatedSettings[index];
  seed = s.seed;
  minSpeed = s.minSpeed;
  maxSpeed = s.maxSpeed;
  num = s.num;
  noiseScale = s.noiseScale;
  noiseStrength = s.noiseStrength;
  maxSize = s.maxSize;
  heightStrength = s.heightStrength;
  stepSmoothing = s.stepSmoothing;
  alphaValue = s.alphaValue;
  backgroundColor = s.backgroundColor;
  tailLength = s.tailLength;
  lifeSpanBase = s.lifeSpanBase;
}

function spawnParticles() {
  for (let i = 0; i < num; i++) {
    //x value start slightly outside the right of canvas, z value how close to viewer
    let loc = createVector(random(width * 1.2), random(height), 0);
    let angle = 0; //any value to initialize
    let dir = createVector(cos(angle), sin(angle));
    let speed = random(minSpeed, maxSpeed);
    // let speed = random(5,map(mouseX,0,width,5,20));   // faster
    let zOffset = random(-15, 15);
    particles[i] = new Particle(loc, dir, speed, zOffset);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(backgroundColor);


  let c = curatedSettings[settingsIndex].cameraSettings;
  if (orbitCtrl) {
    orbitControl();
  } else {
    camera(
      c.x - map(mouseX, 0, windowWidth, 150, -150),
      c.y + map(mouseY, 0, windowHeight, 150, -150) + 2200,
      c.z - 300,
      c.centerX,
      c.centerY,
      c.centerZ,
      c.upX,
      c.upY,
      c.upZ
    );
  }

  push();
  translate(-width / 2, -height / 2);

  for (let i = 0; i < particles.length; i++) {
    particles[i].run();
  }
  pop();
}

function mouseWheel(event) {
  //move the square according to the vertical scroll amount
  scroll += event.delta;
  //uncomment to block page scrolling
  //return false;
}

class Particle {
  constructor(_loc, _dir, _speed, _zOffset) {
    this.loc = _loc;
    this.dir = _dir;
    this.speed = _speed;
    this.zOffset = _zOffset;
    this.spawnTime = millis();
    this.lifeSpan = random(0, 10000); // millis
    this.col = color(0);
    this.tail = [];
    this.tailTime = millis();
    this.fresh = true;
    this.size = 0;
    this.outSide = false;
  }
  run() {
    this.move();
    this.checkEdges();
    this.update();
  }
  move() {
    let tailFreq = 1;
    if (this.tailTime + tailFreq < millis() && !this.fresh) {
      this.tail.push(this.loc.copy());
      this.tailTime = millis();
    }
    this.fresh = false;
    //console.log(this.history.length);

    if (this.tail.length > tailLength) {
      this.tail.splice(0, 1);
    }

    let delta = frameCount / noiseScale / 12;
    let noiseValue = noise(
      (this.loc.x + noiseOffset.x) / noiseScale,
      (this.loc.y + noiseOffset.y) / noiseScale,
      delta * 1
    );
    //this.col = color(0,map(noiseValue, 0, 1, 50, 255),map(noiseValue, 0, 1, 255, 55));
    let angle = noiseValue * TWO_PI * noiseStrength;
    //noise(this.loc.x/noiseScale, this.loc.y/noiseScale, frameCount/noiseScale)*TWO_PI*noiseStrength; //0-2PI

    this.loc.z = map(noiseValue * noiseStrength, 0, 1, heightStrength * -1, 0);

    this.dir.x = cos(angle);
    this.dir.y = sin(angle);
    if (this.outSide && this.size > 0) {
      this.size -= 0.05;
    } else if (this.size < maxSize) {
      this.size += 0.01;
    }

    let vel = this.dir.copy();
    let d = 1; //direction change
    vel.mult(this.speed * d); //vel = vel * (speed*d)
    this.loc.add(vel); //loc = loc + vel
  }
  checkEdges() {
    //float distance = dist(width/2, height/2, loc.x, loc.y);
    //if (distance>150) {
    if (typeof this.tail !== "undefined" && this.tail.length > 0) {
      if (
        this.tail[0].x < 0 ||
        this.tail[0].x > width ||
        this.tail[0].y < 0 ||
        this.tail[0].y > height ||
        this.spawnTime + this.lifeSpan < millis()
      ) {
        if (frameCount < 500 || true) {
          this.loc.x = random(width * 1.2);
          this.loc.y = random(height);
          this.spawnTime = millis();
          this.size = 0;
          this.tail = [];
          this.fresh = true;
          this.outSide = false;
        }
      }
    }
    if (
      this.loc.x < 0 ||
      this.loc.x > width ||
      this.loc.y < 0 ||
      this.loc.y > height ||
      this.spawnTime + this.lifeSpan - 1000 < millis()
    ) {
      this.outSide = true;
    }
  }
  update() {
    beginShape();
    noFill();

    this.col.setAlpha(alphaValue);
    stroke(this.col);

    //problem can only set size of shape maby break up the shape or try lines; risk of preformance loss
    for (let i = 0; i < this.tail.length; i += stepSmoothing) {
      //old to new
      let t = this.tail[i];
      strokeWeight(this.size * 2);
      vertex(t.x, t.y, t.z);
    }
    vertex(this.loc.x, this.loc.y, this.loc.z); // connect to current pos
    endShape();
  }
}