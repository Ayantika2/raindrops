class baseClass {
    constructor(x,y) {
        var options= {
           ' density':1.5,
           'friction':1.0,
           'restitution':0.1
            }
        this.body = Bodies.ellipse(x,y,5,10,options);
        this.width = 5;
        this.height = 10
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        stroke("white");
        fill("blue");
        pop();
    }

}
