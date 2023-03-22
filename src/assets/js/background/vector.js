class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static random(length = 1) {
        const theta = Math.random() * Math.PI * 2;
        const x = length * Math.cos(theta);
        const y = length * Math.sin(theta);
        return new Vec(x, y);
    }

    static fromAngle(theta) {
        const x = Math.cos(theta);
        const y = Math.sin(theta);
        return new Vec(x, y);
    }

    static add(v1, v2) {
        const x = v1.x + v2.x;
        const y = v1.y + v2.y;
        return new Vec(x, y);
    }

    static distance(v1, v2){
        const inBetweenVec = Vec.sub(v2, v1); 
        const mag =  inBetweenVec.magnitude();
        return mag;
    }

    static sub(v1, v2){
        const x = v1.x - v2.x; 
        const y = v1.y - v2.y; 
        return new Vec(x,y);
    }

    add(a, b) {
        if (arguments.length == 1) {
            this.x += a.x;
            this.y += a.y;
        }

        if (arguments.length == 2) {
            this.x += a;
            this.y += b;
        }
        return this;
    }

    set(a, b) {
        if (arguments.length == 1) {
            this.x = a.x;
            this.y = a.y;
        }

        if (arguments.length == 2) {
            this.x = a;
            this.y = b;
        }
        return this;
    }

    sub(a, b) {
        if (arguments.length == 1) {
            this.x -= a.x;
            this.y -= a.y;
        }

        if (arguments.length == 2) {
            this.x -= a;
            this.y -= b;
        }
        return this;
    }

    mult(a, b) {
        if (arguments.length == 1) {
            this.x *= a;
            this.y *= a;
        }else if (arguments.length == 2) {
            this.x *= a;
            this.y *= b;
        }
        return this;
    }

    magnitude(){
        const mag =  Math.sqrt(this.magSq());
        return mag; 
    }

    setMag(n){
        return this.normalize().mult(n);
    }

    normalize(){
        return this.limit(1);
    }

    magSq(){
        const x = this.x;
        const y = this.y;
        return x * x + y * y; 
    }

    limit(n){
        const mSq = this.magSq();
        if (mSq > n * n) {
            this.div(Math.sqrt(mSq)).mult(n);
        }
        return this;  
    }

    div(n){
       this.x /= n; 
       this.y /= n;
       return this;
    }
}

export default Vec;