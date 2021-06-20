var bgImg;
var cat,mouse;


function preload() {

    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    mouseImg1 = loadImage("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(600,600,50,50);
cat.addImage(catImg1)
mouse = createSprite(200,600,50,50)
mouse.addImage(mouseImg1)
cat.scale=0.2
mouse.scale=0.2
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide


if(cat.x - mouse.x<(cat.width -mouse.width)/2){
cat.addAnimation("catRunning",catImg2);
cat.changeAnimation("catRunning");

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === RIGHT_ARROW){
  mouse.addAnimation("mouseTEAsing",mouseImg2);
  mouse.changeAnimation("mouseTeasing");
  mouse.frameDelay = 25;
  mouse.scale=0.2
}
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTEAsing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
    mouse.scale=0.5
  }
}
