var ball,bin1,bin2,bin3;
var ground;
var binImg,binSprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	binImg=loadImage('images/dustbingreen.png');
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	bin1 =  new Bin(560,570,20,170);
	bin2 =  new Bin(605,640,90,20);
	bin3 =  new Bin(650,570,20,170);
	binSprite= createSprite(605,570,200,200);
	binSprite.addImage(binImg);
	binSprite.scale=0.5
	//Create the Bodies Here.
	ball= new Ball(200,200,50,50)
	ground =new Ground(400,670,800,30);
	

	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  Engine.update(engine);
  ball.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display(); 

  
 // drawSprites();
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:1.5,y: -9.5})
	}

}


