var boy,boyImg,alien,alienimg,aliengroup;
var coin, coinImg, lifeBoost, lifeBoostImg,bg, lifeBoostgroup;
var score=0;
var lives=3;
var backgroundImg;
var gameState=0;
var L1 = "play1";
var L2 = "play2";
// images needed: player, fire, coins or hearts, 
// gameStates: story, L1, L2, end

function preload()
{
	backgroundImg= loadImage("space.png");
	alienimg=loadImage("alien.png");
	coinImg=loadImage("coin.png");
	lifeBoostImg = loadImage("life.png");
	boyImg=loadImage("astronaut.png");
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	
	aliengroup = new Group();
	lifeBoostgroup = new Group();
	coingroup = new Group();
}


function draw() {
	  background(0);
	  
	if(gameState===0)
	{
		background(0);

		fill("white")
		textSize(20);
		text("There is an alien apocalypse upon us, and we are no longer on Earth. ",350,80);
		text("We have to fight the aliens in space so that we can take their spaceships and return to Earth. ",300,120);
		text("You need to shoot the aliens as they approach you using Spacebar.",350,160);
		text("If the aliens get to you, then you die and lose a life. To move up and down, use the respective arrow keys.",280,200);
		text("To boost lives, there will be life capsules randomly floating in space and you need to capture them to increase your lifecount. ",220,240);
		text("Press spacebar to start the game. Have fun saving the world!",360,280);

		if(keyDown("space"))
		{
			console.log("This part of the code works")
			gameState=L1;
		}
	}
	/*
		There is an alien apocalypse upon us, and we are no longer on Earth. We have to fight the aliens in space so that we can
		take their spaceships and return to Earth. You need to shoot the aliens as they approach you using Spacebar.
		If the aliens get to you, then you die and lose a life. To boost lives, there will be life capsules randomly floating in space
		and you need to capture them to increase your lifecount. 
		To move up and down, use the respective arrow keys.
		Good luck!
	*/

	if(gameState===L1)	// level 1 - player fights the alien
	{
		//background("white")

		bg = createSprite(width/2,height/2,width,height);
		bg.addImage(backgroundImg);
		bg.scale = 4 ;
	
		boy=createSprite(1200,500,10,10);
		boy.addImage(boyImg);
		boy.scale=0.3;

		if(keyDown(UP_ARROW)){
			boy.y=boy.y-2;
		}
		if(keyDown(DOWN_ARROW)){
			boy.y=boy.y+2;
		}

		createAlien();
		BoostLife();
		Points();
	}

  	drawSprites();
 
}

function createAlien()
{
	if(frameCount%150 === 0)	// % is called the modulus operator, it is used to find the remainder of the division
	{
		alien=createSprite(0,40,10,10);	
		alien.addImage(alienimg);
		alien.scale=0.5
		alien.velocityX=5;	// left to right	
		alien.y=random(20,height-20);
		alien.lifetime=600;	
		aliengroup.add(alien);
		
	}
		
}
// Make the life sprites with the heart images after a given number of frameCount (similar to createAlien())
// Give them a velocity, add them to a life group (make a new coin group in function setup())
// give them a lifetime, make sure their vertical positions are random
function BoostLife()
{
	if(frameCount%1000 === 0)	{
		lifeBoost=createSprite(0,40,10,10);	
		lifeBoost.addImage(lifeboostImg);
		lifeBoost.scale=0.5
		lifeBoostn.velocityX=2;		
		lifeBoost.y=random(20,height-20);
		lifeBoost.lifetime=1000;	
		lifeBoostgroup.add(lifeBoost);
		
	}




}
// Coins
function Points()
{
	if(frameCount%1000 === 0)	
	{
		coin=createSprite(0,40,10,10);	
		coin.scale=0.5
		coin.velocityX=2;		
		coin.y=random(20,height-20);
		coin.lifetime=1000;	
		coingroup.add(coin);
		
	}

}
// call these functions in L1 condition