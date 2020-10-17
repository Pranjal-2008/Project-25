
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;

function preload()
{
	binImage = loadImage("dustbingreen.png")  ;
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(600,600,1200,20,{isStatic:true});
	World.add(world,ground);
	
	
	

	//Create the Bodies Here.
	
	
	box1 = new Dustbin(1100,540,20,150);
	box2 = new Dustbin(1025,580,150,20);
	box3 = new Dustbin(950,540,20,100);
	
	bin = Bodies.rectangle(1025,540,200,100,{isStatic:true});
	World.add(world,bin);
	
	paper1 = new Paper(50,500,35);

}


function draw() {
	background(200);
	Engine.update(engine);
  rectMode(CENTER);
  fill("yellow");
  rect(ground.position.x,ground.position.y,1200,20);

  
  
  box1.display();
  box3.display();
  box2.display();
  

  imageMode(CENTER);
 image(binImage,bin.position.x,bin.position.y,200,100);
  
 paper1.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:400,y:-170});

}
}



