class Hammer {
    constructor(x,y,angle){
        var options = {
          density : 2,
          friction : 1.0,
          restitution :0.5
      }
      this.body =  Bodies.rectangle(x,y,100,50,options);
      this.width = 100;
      this.height = 50;
      this.angle = angle;
        Matter.Body.setAngle(this.body, this.angle);
      World.add(world,this.body);
    }
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      push();
      fill("yellow")
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
      
    }
  }
