class Sand{
    constructor(x, y, radius) {
        var options = {
            restitution:1.3,
            friction:5,
            density:1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill("brown")
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
  }