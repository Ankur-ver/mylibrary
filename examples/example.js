// import Vector from "../src/vector.js";
// import Particle from "../src/particle.js";
import {Vector,Particle} from '../src/index.js'
const canvas = document.getElementById('simulationCanvas');
const ctx = canvas.getContext('2d');

function clearCanvas() {
  ctx.fillStyle = '#f0f0f0'; 
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const particles = [];
const initialColor = '#ff0000'; 

function createParticle() {
  let position;
  let overlap;
  const radius = 10; 
  const maxAttempts = 10; 
  let attempts = 0;

  do {
    overlap = false;
    position = new Vector(Math.random() * canvas.width, canvas.height - radius);

    for (let i = 0; i < particles.length; i++) {
      const dx = particles[i].position.x - position.x;
      const dy = particles[i].position.y - position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 2 * radius) {
        overlap = true;
        break;
      }
    }

    attempts++;


    if (attempts >= maxAttempts) {
      console.warn("attempt reached");
      return; 
    }

  } while (overlap);

  const velocity = new Vector(0, 0); 
  const particle = new Particle(position, velocity, 1);
  particle.color = initialColor;
  particles.push(particle);
}


for (let i = 0; i < 90; i++) {
  createParticle();
}

function applyMouseForce(particle, mousePos) {
  const distanceVector = particle.position.subtract(mousePos);
  const distance = distanceVector.magnitude();
 
  const radius = 50; 
  if (distance < radius) {
    const forceMagnitude = (radius - distance) / radius; 
    const force = distanceVector.normalize().multiply(forceMagnitude * 5);
    console.log(force);
    particle.applyForce(force);
  }
}

canvas.addEventListener('mousemove', (e) => {
  const mousePos = new Vector(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  
  particles.forEach(particle => {
    applyMouseForce(particle, mousePos);
  });
});

function detectCollision(p1, p2) {
  const dx = p2.position.x - p1.position.x;
  const dy = p2.position.y - p1.position.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const radiusSum = 10 + 10;

  return distance < radiusSum;
}

function handleCollision(p1, p2) {
  const normal = p2.position.subtract(p1.position);
  const magnitude = normal.magnitude();
  const unitNormal = normal.divide(magnitude);

  const relativeVelocity = p2.velocity.subtract(p1.velocity);
  const velocityAlongNormal = relativeVelocity.dot(unitNormal);

  if (velocityAlongNormal > 0) return; 

  const restitution = 1;
  const impulse = 2 * velocityAlongNormal / (p1.mass + p2.mass);
  
  p1.velocity = p1.velocity.add(unitNormal.multiply(impulse * p2.mass * restitution));
  p2.velocity = p2.velocity.subtract(unitNormal.multiply(impulse * p1.mass * restitution));
}

function update() {
  const gravity = new Vector(0, 0);

  particles.forEach(particle => {
    particle.applyForce(gravity);
    particle.update(1);

    if (particle.position.x + 10 > canvas.width || particle.position.x - 10 < 0) {
      particle.velocity.x *= -1;
    }
    if (particle.position.y + 10 > canvas.height || particle.position.y - 10 < 0) {
      particle.velocity.y *= -1;
    }
  });

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      if (detectCollision(particles[i], particles[j])) {
        handleCollision(particles[i], particles[j]);
      }
    }
  }


  if (particles.length < 5) {
    createParticle();
  }
}

function render() {
  clearCanvas();

  particles.forEach(particle => {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.position.x, particle.position.y, 10, 0, Math.PI * 2);
    ctx.fill();
  });
}

function animate() {
  update();  
  render(); 
  requestAnimationFrame(animate);
}

animate();
