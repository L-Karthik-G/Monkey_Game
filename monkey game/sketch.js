
var monkey , running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
   
}



function setup() {
  
  monkey=createSprite(50,360,40,20);
  monkey.addAnimation("running",running);
  monkey.scale=0.1
  

  

  
  ground=createSprite(200,400,600,20)
  ground.velocityX=-3


  
}

  

function draw() {
  createCanvas(600,400)
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    if(keyDown("space") && monkey.y >= 359.3) {
        monkey.velocityY = -20;
    }
  
    monkey.velocityY=monkey.velocityY+0.7
  
    monkey.collide(ground)
  
    
 
  
  console.log(monkey.y)
  
  obstacles();
  bananna();
  
  
  drawSprites();

  
}

function obstacles(){
  if(frameCount % 140 === 0){
    obstacle=createSprite(400,380,600,20);
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.22
    obstacle.velocityX=-6
    obstacle.setCollider("rectangle",0,0,500,350)  
    obstacle.collide(ground)
  }
}

function bananna(){
  if(frameCount % 60 === 0){
    banana = createSprite(400,Math.round(random(80, 200)),20,50)
    banana.addImage(bananaImage)
    banana.velocityX=-6
    banana.scale=0.08
  
  }
}






