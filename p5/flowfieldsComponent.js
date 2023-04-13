import dynamic from "next/dynamic";


function sketch(p5) {
  //https://www.openprocessing.org/sketch/157576

  let cnv;

  let scrollPos = 0;

  let mX = 500;
  let mY = 500;

  let cam;

  let num = 1200;
  let noiseScale = 800;
  let noiseStrength = 2; // default 500, 1
  let particles = [num];
  let maxSize = 1;
  let heightStrength = 900;
  let stepSmoothing = 2;
  let alphaValue = 51;
  let backgroundColor = 255;
  let tailLength = 40;
  let lifeSpanBase = 8000;
  let seed = 0;
  let minSpeed = 5;
  let maxSpeed = 10;

  let cameraPos;
  let cameraStart;
  let cameraEnd;
  let lookSpeed = 0.01;

  let scroll = 0;
  let settingsIndex = 0;

  let debug = false;
  let orbitCtrl = false;

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
      seed: 3181,
      minSpeed: 5,
      maxSpeed: 15,
      num: 800,
      noiseScale: 1200,
      noiseStrength: 2,
      maxSize: 1,
      heightStrength: 900,
      stepSmoothing: 2,
      alphaValue: 71,
      backgroundColor: 255,
      tailLength: 15,
      lifeSpanBase: 100,
      cameraSettings: {
        x: 0,
        y: 500,
        z: -1300,
        centerX: 0,
        centerY: 0,
        centerZ: 0,
        upX: 0,
        upY: 0,
        upZ: 0,
      },
    },
  ];

  p5.setup = () => {
    cnv = p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    cnv.mouseMoved(() => {
      mX = p5.mouseX;
      mY = p5.mouseY;
    });
    loadSettings(0);
    cam = p5.createCamera();
    cameraPos = cameraStart;
    p5.noStroke();
    if (debug) {
      seed = Math.trunc(p5.random(1, 10000));
      console.log(seed);
    }

    p5.noiseSeed(seed);
    spawnParticles();
    p5.frameRate(30);
  };

  

  //good seed 7863, 9898
  function loadSettings(index) {
    let s = curatedSettings[index];

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

    cameraStart = p5.createVector(0, -3000, -100);
    cameraEnd = p5.createVector(1400, 0, -1000);
    cameraStart = cameraEnd;
  }

  function spawnParticles() {
    for (let i = 0; i < num; i++) {
      //x value start slightly outside the right of canvas, z value how close to viewer
      let loc = p5.createVector(
        p5.random(p5.width * 1.2),
        p5.random(p5.height),
        0
      );
      let angle = 0; //any value to initialize
      let dir = p5.createVector(p5.cos(angle), p5.sin(angle));
      let speed = p5.random(minSpeed, maxSpeed);
      // let speed = random(5,map(mouseX,0,width,5,20));   // faster
      let zOffset = p5.random(-15, 15);
      particles[i] = new Particle(loc, dir, speed, zOffset);
    }
  }
    p5.mouseWheel = (event) => {
    scrollPos += event.delta;
  }

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  p5.draw = () => {
    if (p5.height < window.scrollY) {
      return;
    }
    p5.background(backgroundColor);

    lookSpeed = p5.lerp(lookSpeed, 0.05, 0.0005);

    let moveAmount = 450;
    cameraPos.x = p5.lerp(
      cameraPos.x,
      p5.map(mX, 0, p5.width, -moveAmount, moveAmount),
      lookSpeed
    );

    cameraPos.y = p5.lerp(
      cameraPos.y,
      p5.map(mY, 0, p5.width, moveAmount, -moveAmount),
      lookSpeed
    );
    cameraPos.z = p5.lerp(cameraPos.z, cameraEnd.z, lookSpeed);

    let c = curatedSettings[settingsIndex].cameraSettings;
    if (orbitCtrl) {
      p5.orbitControl();
    } else {
      cam.lookAt(0, 0, 0);

      cam.setPosition(cameraPos.x, cameraPos.y, cameraPos.z);
    }

    p5.push();
    p5.translate(-p5.width / 2, -p5.height / 2);
    for (let i = 0; i < particles.length; i++) {
      particles[i].run();
    }
    p5.pop();
  };

  class Particle {
    constructor(_loc, _dir, _speed, _zOffset) {
      this.loc = _loc;
      this.dir = _dir;
      this.speed = _speed;
      this.zOffset = _zOffset;
      this.spawnTime = p5.frameCount;
      this.lifeSpan = p5.random(200, 400); // frames
      this.col = p5.color(0);
      this.tail = [];
      this.tailTime = p5.frameCount;
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
      if (this.tailTime + tailFreq < p5.frameCount && !this.fresh) {
        this.tail.push(this.loc.copy());
        this.tailTime = p5.frameCount;
      }
      this.fresh = false;
      //console.log(this.history.length);

      if (this.tail.length > tailLength) {
        this.tail.splice(0, 1);
      }

      let delta = p5.frameCount / noiseScale / 12;
      let noiseValue = p5.noise(
        this.loc.x / noiseScale,
        this.loc.y / noiseScale,
        delta * 1
      );
      let angle = noiseValue * p5.TWO_PI * noiseStrength;

      this.loc.z =
        p5.map(noiseValue * noiseStrength, 0, 1, heightStrength * -1, 0) +
        this.zOffset;
      this.dir.x = p5.cos(angle);
      this.dir.y = p5.sin(angle);

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
          this.tail[0].x > p5.width ||
          this.tail[0].y < 0 ||
          this.tail[0].y > p5.height ||
          this.spawnTime + this.lifeSpan < p5.frameCount
        ) {
          this.loc.x = p5.random(p5.width * 1.2);
          this.loc.y = p5.random(p5.height);
          this.spawnTime = p5.frameCount;
          this.size = 0;
          this.tail = [];
          this.fresh = true;
          this.outSide = false;
        }
      }
      if (
        this.loc.x < 0 ||
        this.loc.x > p5.width ||
        this.loc.y < 0 ||
        this.loc.y > p5.height ||
        this.spawnTime + this.lifeSpan - 100 < p5.frameCount
      ) {
        this.outSide = true;
      }
    }
    update() {
      p5.beginShape();
      p5.noFill();

      this.col.setAlpha(alphaValue);
      p5.stroke(this.col);
      if (this.speed > 7) {
        stepSmoothing = 1;
      } else {
        stepSmoothing = 1;
      }

      //problem can only set size of shape maby break up the shape or try lines; risk of preformance loss
      for (let i = 0; i < this.tail.length; i += stepSmoothing) {
        //old to new
        let t = this.tail[i];
        p5.strokeWeight(this.size * 2);
        p5.vertex(t.x, t.y, t.z);
      }
      p5.vertex(this.loc.x, this.loc.y, this.loc.z); // connect to current pos
      p5.endShape();
    }
  }
}
const P5Wrapper = dynamic(
  import("react-p5-wrapper").then((module) => {
    const { ReactP5Wrapper } = module;
    return ReactP5Wrapper;
  }),
  {
    ssr: false,
  }
);

export default () => {
  return <P5Wrapper sketch={sketch} />;
};
