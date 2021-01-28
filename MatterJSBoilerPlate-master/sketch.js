
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, tree, treeImage;
var boy, boyImage
var stones
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;

function preload()
{
	treeImage = loadImage("tree.png");
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
  ground = new ground(100,460,13);
  stones = new stones();
  mango1 = new mango();
  mango2 = new mango();
  mango3 = new mango();
  mango4 = new mango();
  mango5 = new mango();
  mango6 = new mango();
  mango7 = new mango();
  mango8 = new mango();
  mango9 = new mango();
  mango10 = new mango();

  attach = new Throw(stones.body,{x:100,y:465});

  tree = createSprite(775,368);
  tree.addImage(treeImage);
  tree.scale = 0.42;

  boy = createSprite();
  boy.addImage(boyImage);
  boy.scale = 0.125;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  fill("black");
  textSize(18);

detectCollision(stones,mango1);
detectCollision(stones,mango2);
detectCollision(stones,mango3);
detectCollision(stones,mango4);
detectCollision(stones,mango5);
detectCollision(stones,mango6);
detectCollision(stones,mango7);
detectCollision(stones,mango8);
detectCollision(stones,mango9);
detectCollision(stones,mango10);

  drawSprites();
 

stones.display();
ground.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();

}

function mouseDragged(){
  Matter.body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  attach.fly();
}


function detectCollision(Astones,Bmango){
mangoBodyPosition = Bmango.body.position
stonesBodyPosition = Astones.body.position

var distance = dista(stonesBodyPosition.x, stonesBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
     
if(distance <= Bmango.r + Astones.r){
Matter.body.setStatic(Bmango.body,false)
}

}

function keyPressed(){
  if(keyCode === 32){
Matter.body.setPosition(stones.body, {x:235, y:420});
  }
}
