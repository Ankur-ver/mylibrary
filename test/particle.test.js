import Vector from '../src/vector.js';
import Particle from '../src/particle.js';
test('Particle should be created with correct properties',()=>{
    const position=new Vector(0.0);
    const velocity=new Vector(1,1);
    const mass=1;
    const particle=new Particle(position,velocity,mass);
    expect(particle.position).toEqual(position);
    expect(particle.velocity).toEqual(velocity);
    expect(particle.mass).toBe(mass);
})