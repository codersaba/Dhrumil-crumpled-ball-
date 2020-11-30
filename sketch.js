
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundSprite,ground,db1,db2,db3,dbBody1,dbBody2,dbBody3;
var trash,trashBody;
var world,engine;
var dustBin;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	db1=createSprite(1200,610,20,100);
	db1.shapeColor=color("red");
	
	db2=createSprite(1400,610,20,100);
	db2.shapeColor=color("red");

	db3=createSprite(1300,650,200,20);
	db3.shapeColor=color("red");

	
	
  

	engine = Engine.create();
	world = engine.world;
	dustBin=new DustBin(1300,500,200,250);
	trash=new Paper(200,80,20);
	

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	dbBody1= Bodies.rectangle(1200,610,20,100,{isStatic:true}) ;
	World.add(world,dbBody1);

	dbBody2=Bodies.rectangle(1400,610,20,100,{isStatic:true});
	World.add(world,dbBody2);

	dbBody3=Bodies.rectangle(1300,650,200,20,{isStatic:true});
	World.add(world,dbBody3);




	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);
  db1.x= dbBody1.position.x;
  db1.y= dbBody1.position.y;

  db2.x= dbBody2.position.x;
  db2.y= dbBody2.position.y;

  db3.x=dbBody3.position.x;
  db3.y=dbBody3.position.y;

  
  drawSprites();
  trash.display();
  dustBin.display();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(trash.body,trash.body.position,{x:60,y:60});
	}
}



