var garden,rabbit;
var gardenImg,rabbitImg;
var leaf, leafImage;
var appleImage;
var apple;
var rand;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImage = loadImage("orangeLeaf.png");
  appleImage = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
  garden=createSprite(200,200);
  garden.addImage(gardenImg);


  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);
  
  rabbit.x = mouseX;
  
  rand = Math.round(random(1,2));

  if(frameCount%80 === 0){  

    switch(rand) {
      case 1: createApples();
      break;
      case 2: createLeaves();
      break;
      default: break;
    }
  }
  drawSprites();
}

function createApples(){
  apple = createSprite(600, 0, 40, 10);
  apple.addImage("fall",appleImage);
  apple.x = Math.round(random(1,400));
  apple.scale = 0.1;
  apple.velocityY=+2;
  apple.lifetime=200;
}

function createLeaves(){
  leaf = createSprite(600, 0, 40, 10);
  leaf.addImage("moving", leafImage);
  leaf.x = Math.round(random(1,400));
  leaf.scale = 0.1;
  leaf.velocityY=+2;
  leaf.lifetime=200;
}



