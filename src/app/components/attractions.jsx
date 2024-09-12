"use client";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

const GRAVITY = 30;

function PhysBall(x, y, mass, maxPos, p5) {
  this.pos = p5.createVector(x, y);
  this.vel = p5.createVector();
  this.acc = p5.createVector();
  this.force = p5.createVector();
  this.mass = mass;
  this.color = [299, 0, 100];
  const accLimit = 10;
  const friction = 0.015;
  const diameter = 130;

  this.show = () => {
    p5.noStroke();
    p5.fill(this.color[0], this.color[1], this.color[2]);

    p5.circle(this.pos.x, this.pos.y, diameter);
  };

  const baseVel = p5.createVector();

  this.update = (target) => {
    this.force.set(0, 0);

    this.force.add(
      this.calculateForce(
        GRAVITY,
        this.mass,
        target.mass,
        this.pos.copy(),
        target.pos.copy()
      )
    );

    this.acc.add(this.force);
    this.vel.add(this.acc).limit(accLimit);
    this.pos.add(this.vel);
    this.vel.lerp(baseVel, friction);
    this.pos.x = p5.constrain(
      this.pos.x,
      diameter / 2,
      maxPos.x - diameter / 2
    );
    this.pos.y = p5.constrain(
      this.pos.y,
      diameter / 2,
      maxPos.y - diameter / 2
    );

    this.calculateColor(this.vel, 0, 100);
    this.show();
    this.acc.set(0, 0);
  };

  this.calculateForce = (g, m1, m2, p1, p2) => {
    const m = m1 * m2;
    const f = p2.sub(p1);
    const dSq = f.magSq();
    if (dSq < 500) {
      return this.vel;
    }
    const s = (g * m) / dSq;
    f.setMag(s);
    f.div(m1);

    return f;
  };

  this.calculateColor = (acc, s1, s2) => {
    const sNorm = p5.map(acc.mag(), 0, 10, s1, s2);
    this.color[1] = sNorm;
  };
}

export default function Sketch({ backgroundColor, frameRate, size }) {
  function drawing(p5) {
    const particleCount = 50;

    let particles = [];
    let target;

    p5.setup = () => {
      p5.frameRate(frameRate);
      const canvasDiv = document.getElementById("home-container");
      const width = canvasDiv.offsetWidth;
      const height = canvasDiv.offsetHeight;
      let canvas = p5.createCanvas(width, height);
      canvas.parent("home-container");
      p5.background(backgroundColor);
      target = new PhysBall(
        width / 2,
        height / 2,
        50,
        { x: width, y: height },
        p5
      );
      for (let i = 0; i < particleCount; i++) {
        particles.push(
          new PhysBall(
            p5.random(0, width),
            p5.random(0, height),
            100,
            { x: width, y: height },
            p5
          )
        );
      }

      p5.colorMode(p5.HSB);
    };

    p5.draw = () => {
      p5.background(backgroundColor);
      particles.forEach((p) => p.update(target));
    };

    p5.mouseMoved = () => {
      target.pos.x = p5.mouseX;
      target.pos.y = p5.mouseY;
    };

    p5.windowResized = () => {
      const canvasDiv = document.getElementById("home-container");
      const width = canvasDiv.offsetWidth;
      const height = canvasDiv.offsetHeight;
      p5.resizeCanvas(width, height);
    };
  }

  return <NextReactP5Wrapper sketch={drawing} />;
}
