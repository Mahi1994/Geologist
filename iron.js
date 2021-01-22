class Iron {
    constructor(x,y,width,height,angle){
        var options = {
          density : 1,
          friction : 1.0,
          restitution :0.3
      }
      this.body =  Bodies.rectangle(x,y,this.width,this.height,options);
      this.width = width;
      this.height = height;
      this.angle = angle;
      Matter.Body.setAngle(this.body,this.angle)
      World.add(world,this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      fill("red")
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
      pop();
      
    }
  }