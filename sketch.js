
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var rubber;
var ground;
var sand1,sand2,sand3,sand4,sand5;
var iron;
var stone;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
     
	//Create the Bodies Here.
	hammer = new Hammer(100,100,150,50,PI/6);
	ground = new Ground(400,680,800,15)
	rubber = new Rubber(400,350,50);
	sand1 = new Sand(100,350,20)
	sand2 = new Sand(150,350,20)
	sand3 = new Sand(200,350,20)
	sand4 = new Sand(250,350,20)
	sand5 = new Sand(350,350,20)
	iron = new Iron(600,350,100,70)
	stone = new Stone(50,350,200,200)
	Engine.run(engine);
  
}


function draw() {
  background("lightblue");
  Engine.update(engine);
  rectMode(CENTER);
  hammer.display();
  ground.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  iron.display();
  stone.display();
}



