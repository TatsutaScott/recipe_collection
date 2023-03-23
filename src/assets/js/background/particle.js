import Vec from './vector.js'

const maxSpeed = 0.15;
const  maxForce = 0.07;

class Particle{
    constructor(context, x, y){
        this.ctx = context;
        this.position = new Vec(x, y);
        this.origin = new Vec(x, y);
        this.velocity = new Vec(0,0); 
        this.acceleration = new Vec(0,0);  
    }

    wrap() {
        const width = this.ctx.canvas.width; 
        const height = this.ctx.canvas.height;

        if (this.position.x >= width) {
            this.position.x = 0;
        } else if (this.position.x <= 0) {
            this.position.x = width;
        }

        if (this.position.y >= height) {
            this.position.y = 0;
        } else if (this.position.y <= 0) {
            this.position.y = height;
        }
    }
    
    bounce(){
        const width = this.ctx.canvas.width; 
        const height = this.ctx.canvas.height;

        if (this.position.x >= width || this.position.x <= 0) {
            this.velocity.x *= -1;
        }

        if (this.position.y >= height || this.position.y <= 0) {
            this.velocity.y *= -1;
        }
    }

    update(bounds) {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        if(bounds == 'wrap'){
            this.wrap();
        }if(bounds == 'bounce'){
            this.bounce();
        }
        this.acceleration.set(0, 0);
    }

    orbit(center, radius, inc){
        this.position.set(center.x + (Math.sin(inc) * radius), center.y + (Math.cos(inc) * radius))
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    seek(target) {
        const force = Vec.sub(target, this.position);
        const desiredSpeed = maxSpeed;

        force.setMag(desiredSpeed);
        force.sub(this.velocity);
        force.limit(maxForce);

        this.applyForce(force);
    }

    closeTo(target, radius){
        const dist = Vec.distance(this.position, target); 
        if(dist < radius){
            this.ctx.fillStyle = 'red'; 
            this.flee(target)
        }else{
            this.ctx.fillStyle = 'blue'; 
            this.seek(this.origin);
        }    
    }

    flee(target) {
        const desired = Vec.sub(target, this.position);
        desired.normalize();
        desired.mult(maxSpeed);
        desired.mult(-1);
        const steer = Vec.sub(desired, this.velocity);
        steer.limit(maxForce);
        this.applyForce(steer);
    }

    setEmoji(emoji){
        this.emoji = emoji;
    }

    show(mode){
        if(mode == 'dot'){
            this.ctx.fillRect(this.position.x, this.position.y, 4, 4);
        }else{
            this.ctx.font = '12pt arial'
            this.ctx.fillText(this.emoji, this.position.x, this.position.y);
        }
    }
}

// function map(n, start1, start2, stop1, stop2){
//   return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
// }

export default Particle;