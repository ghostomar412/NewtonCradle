
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

bob1 = new Bob(300,500,50);
bob2 = new Bob(400,500,50);
bob3 = new Bob(500,500,50);
bob4 = new Bob(600,500,50);
bob5 = new Bob(700,500,50);
roof = new Roof(500,100,500,50) 
rope1=new Rope(bob1.body, {x:300, y: 120})
rope2=new Rope(bob2.body, {x:400, y: 120})
rope3=new Rope(bob3.body, {x:500, y: 120})
rope4=new Rope(bob4.body, {x:600, y: 120})
rope5=new Rope(bob5.body, {x:700, y: 120})

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,500,100);
  
 
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

 if(keyDown(UP_ARROW)){

	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-55,y:-55});
}
}



