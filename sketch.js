const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var largeGround,ground
var box1,box2,box3,box4,box5,box6,box7,box8,box9
var hexa,hexaImg
var slingshot


function preload()
{
	hexaImg=loadImage("polygon.png")
}

function setup() {

    engine = Engine.create();
	world = engine.world;

	createCanvas(1200, 600);
	

	//Create the Bodies Here.
	
largeGround=new Ground(600,500,1200,20)
ground=new Ground(700,400,300,20);
box1=new Box(700,380,40,40);
box2=new Box(660,380,40,40);
box3=new Box(620,380,40,40);
box4=new Box(740,380,40,40);
box5=new Box(780,380,40,40);
box6=new Box(660,320,40,40);
box7=new Box(700,320,40,40);
box8=new Box(740,320,40,40);
box9=new Box(680,270,40,40);
box10=new Box(720,270,40,40);
box11=new Box(700,210,40,40);


hexa=Bodies.circle(50,200,20)
World.add(world,hexa);

slingshot=new SlingShot(hexa,{x:150,y:200});


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  background(0);

 
  
  drawSprites();

  largeGround.display();
  ground.display();

  fill ("green");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
fill("yellow")
  box6.display();
  box7.display();
  box8.display();
fill("blue");
  box9.display();
  box10.display();
fill("red")
  box11.display();


  slingshot.display();

  imageMode(CENTER)
  image(hexaImg,hexa.position.x,hexa.position.y,40,40)
}

function mouseDragged(){
    Matter.Body.setPosition(hexa, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}