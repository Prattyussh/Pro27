
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob=new Bob(250,650,50);
bob2=new Bob(300,650,50);
bob3=new Bob(350,650,50);
bob4=new Bob(400,650,50);
bob5=new Bob(450,650,50);
roof=new Roof(400,50,1000,10);
rope1=new Rope(bob.body,roof.body,-50*2,0);
rope2=new Rope(bob2.body,roof.body,-50*1,0);
rope3=new Rope(bob3.body,roof.body,0,0);
rope4=new Rope(bob4.body,roof.body,50*1,0);
rope5=new Rope(bob5.body,roof.body,50*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob.display();
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
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW){
		 Matter.Body.applyForce(bob.body,bob.body.position,{x:-20,y:-0});
 }
 }



