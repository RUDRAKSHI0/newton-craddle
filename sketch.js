
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var groundObject;
var rope1,rope2,rope3,rope5;
var BobDiameter;
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  BobDiameter = 0.1
	//Create the Bodies Here.
bobObject1=new Bob(300,350,50);
bobObject2=new Bob(350,350,50);
bobObject3=new Bob(400,350,50);
bobObject4=new Bob(450,350,50);
bobObject5=new Bob(500,350,50);
groundObject=new Ground(400,200,300,40)
rope1= new Rope(bobObject1.body,groundObject.body,-50*2,0);
rope2= new Rope(bobObject2.body,groundObject.body,-25*2,0);
rope3= new Rope(bobObject3.body,groundObject.body,-0*2,0);
rope4= new Rope(bobObject4.body,groundObject.body,25*2,0);
rope5= new Rope(bobObject5.body,groundObject.body,50*2,0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  groundObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //keyPressed();
  drawSprites();
 
}
function keyPressed(){
if(keyCode==="LEFT_ARROW"){
Matter.Body.applyForce(bobObject1.body,bobObject2.body.position,{x:-730,y:0})
}
}


