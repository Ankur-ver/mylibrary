import Vector from "./vector.js";
 class Particle{
    constructor(position,velocity,mass){
        this.position=position;
        this.velocity=velocity;
        this.mass=mass;
        this.acceleration=new Vector(0,0);
    }
    applyForce(force) {
        const f = force.divide(this.mass); 
        this.acceleration = this.acceleration.add(f);
      }
    update(dt){
        this.velocity=this.velocity.add(this.acceleration.multiply(dt));
        this.position=this.position.add(this.velocity.multiply(dt));
        this.acceleration=this.acceleration=new Vector(0,0);
    }
}
export default Particle;