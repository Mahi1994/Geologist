class Stone {
    constructor(x,y,width,height,angle){
        var options = {
          density : 3,
          friction : 2,
          restitution :0.4
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
      fill("black")
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
      pop();
      
    }
  }