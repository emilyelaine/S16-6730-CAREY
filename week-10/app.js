var system, x;

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(random(0, width), 0));
  frameRate(6)
}

function draw() {
  x = x + 1;

  background(51);
  system.addParticle();
  system.run();

  ellipse(x, height/2, 50, 50);
  fill(255);
  noStroke();
}


var Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(0, 0);
  this.position = position.copy();
  this.lifespan = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(127, this.lifespan);
  ellipse(random(0, width), this.position.y, 1, 1);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }

  if(x > width){
    x = 0;
  }

};