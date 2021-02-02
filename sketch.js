var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);


	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	var starBody_options={isStatic: true};
	starBody = Bodies.circle(650 , 30 , 5 ,starBody_options);
	World.add(world, starBody);

	star.x=starBody.position.x;
	star.y=starBody.position.y;

	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  keyPressed();
  fairy.velocityX=0;
  

  drawSprites();

}

function keyPressed() {
	if(keyCode === LEFT_ARROW){
		fairy.velocityX=-50;
	}	 
	if(keyCode === RIGHT_ARROW){
		fairy.velocityX=50;
		fairyVoice.play();
	}	
	if(keyCode === DOWN_ARROW){
		star.velocityY=10;
	}
	if(star.y>470){
		star.velocityY=0;
	}
}	
	
	
