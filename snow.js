class Snow {
    constructor(x, y) {
        var options = {
            restitution: 0.5,
            friction: 0,
            
        }
        this.r = 35;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("snow5.webp")
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        

        push();
        translate(pos.x,pos.y);
        
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r)
        pop();
    }

};