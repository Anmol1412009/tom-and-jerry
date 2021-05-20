var cat,mouse,garden;
var catimg1,catimg2,mouseimg1,mouseimg2,gardenimg;

function preload() {
    //load the images here

   catimg1= loadAnimation("cat1.png")
   catimg2=loadAnimation("cat2.png,cat3.png")
   mouseimg1=loadAnimation("mouse1.png")
   mouseimg2=loadAnimation("mouse2.png,mouse3.png")
   gardenimg=loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  cat=createSprite(500,400,20,20);
  cat.addAnmimation("sitting",catimg1)
  cat.addAnimation("moving",catimg2)

  garden=createSprite(202,200,20,20)
  garden.addImage("ground",gardenimg)

  mouse=createSprite(300,300,20,20)
  mouse.addAnmimation(mouseimg1,mouseimg2)

   
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x <(cat.width-mouse.width)/2)
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){

         mouse.addAnmimation("mouseTeasing",mouseimg2)
         mouse.changeAnimation("mouseTeasing")
         mouse.frameDelay = 25;


  }

  if(keyCode === RIGHT_ARROW){

    mouse.addAnmimation("mouseTeasing",mouseimg2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay = 25;


}



}
