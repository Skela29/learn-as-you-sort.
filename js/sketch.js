var form, form1,gameState=0,play
var mammals,amphibians,reptiles
var cow,snake,frog
var score=0
var gameLevel, animalsFound=0
var slytherin,griffindor,ravenclaw, harryPotterBg
var slytherinAnimal,griffindorAnimal,ravenclawAnimal
var pen, pencil, eraser
var penSprite, pencilSprite, eraserSprite
function preload(){
  animalBg=loadImage("Images/AnimalBg.jpg")
  cowImg = loadImage("Images/Cow.png")
  frogImg = loadImage("Images/frog.png")
  snakeImg = loadImage("Images/Snake.png")

  reptilesImg = loadImage("Images/Reptile.png")
  amphibiansImg = loadImage("Images/Amphibian.png")
  mammalsImg = loadImage("Images/Mammals.jpg")

  harryPotterBg=loadImage("Images/harryPotterBg.jpg")
  slytherinImg = loadImage("Images/slytherin.jpg")
  ravenclawImg = loadImage("Images/ravenclaw.jpg")
  griffindorImg = loadImage("Images/griffindor.jpg")

  slytherinAnimalImg = loadImage("Images/slytherinAnimal.png")
  griffindorAnimalImg = loadImage("Images/griffindorAnimal.png")
  ravenclawAnimalImg = loadImage("Images/ravenclawAnimal.png")

  StationaryBg=loadImage("Images/StationaryBg.jpg")
  penObj = loadImage("Images/penImg.png")
  pencilObj = loadImage("Images/pencilImg.png")
  eraserObj = loadImage("Images/eraserImg.png")

  penImg = loadImage("Images/pen.png")
  pencilImg = loadImage("Images/pencil.png")
  eraserImg = loadImage("Images/eraser.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight-50);
form = new Form();
form1 = new Form();
form2 = new Form();
game = new Game();
game.startLevel1();
}

function draw() {
  background(255,255,255); 
  if(gameState==1){
game.playLevel1();
  } 
  if(gameState==0){
    form.display();
  }
  if(gameState==1.5){
    form1.display();
  }
  if(gameState==2){
    game.playLevel2();
  }
if(gameState == 2.5){
 form2.display()
}
if(gameState == 3){
  game.playLevel3();
}
if (gameState == 3.5){
  pencil.destroy()
  pen.destroy()
  eraser.destroy()
  text("You have succesfully completed the game, Congratulations!",width/2-100,height/2)
}

}
