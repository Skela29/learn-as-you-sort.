class Game{
    constructor(){

    }
    startLevel1(){
        mammals = createSprite(displayWidth/2-250,displayHeight/2,50,50)
        mammals.addImage(mammalsImg)
        mammals.scale=0.1
        amphibians = createSprite(displayWidth/2,displayHeight/2,50,50)
        amphibians.addImage(amphibiansImg)
        amphibians.scale=0.1
        reptiles = createSprite(displayWidth/2+250,displayHeight/2,50,50)
        reptiles.addImage(reptilesImg)
        reptiles.scale=0.1
        frog = createSprite(width-100,height-100)
        frog.addImage(frogImg)
        frog.scale=0.3
        cow = createSprite(200,height/2+50)
        cow.addImage(cowImg)
        cow.scale=0.4
        snake = createSprite(width-250,height/4-40)
        snake.addImage(snakeImg)
        snake.scale=0.5  
    }
    playLevel1(){
        background(animalBg)
        textSize(30)
        text("Score:"+score,50,50)

// Cow
        if(cow.isTouching(mammals)){
            cow.destroy();
            score = score+10
            animalsFound++
        }

        if(mousePressedOver(cow)){
            cow.x=mouseX
            cow.y=mouseY
            if(cow.isTouching(reptiles)||cow.isTouching(amphibians)){
                cow.x = 200
                cow.y = height/2+50
                score-=5
            }
        }
// Snake
        if(snake.isTouching(reptiles)){
            snake.destroy();
            score = score+10
            animalsFound++
        }
 
        if(mousePressedOver(snake)){
            snake.x=mouseX
            snake.y=mouseY
            if(snake.isTouching(mammals)||snake.isTouching(amphibians)){
                snake.x = width-250
                snake.y = height/4-40
                score-=5
            }
        }
// Frog
        if(frog.isTouching(amphibians)){
            frog.destroy();
            score = score+10
            animalsFound++
        }
   
        if(mousePressedOver(frog)){
            frog.x=mouseX
            frog.y=mouseY
            if(frog.isTouching(reptiles)||frog.isTouching(mammals)){
                frog.x = width-100
                frog.y = height-100
                score-=5
            }
        }
        if(animalsFound===3){
    gameState=1.5
        }
        drawSprites();
        }
        
        startLevel2(){
            mammals.destroy();
            reptiles.destroy();
            amphibians.destroy();
            slytherin = createSprite(displayWidth/2-250,displayHeight/2,50,50)
            slytherin.addImage(slytherinImg)
            slytherin.scale=0.3
            griffindor = createSprite(displayWidth/2+250,displayHeight/2,50,50)
            griffindor.addImage(griffindorImg)
            griffindor.scale=0.3
            ravenclaw = createSprite(displayWidth/2,displayHeight/2,50,50)
            ravenclaw.addImage(ravenclawImg)
            ravenclaw.scale=0.35
            griffindorAnimal = createSprite(width-100,height-100)
            griffindorAnimal.addImage(griffindorAnimalImg)
            griffindorAnimal.scale=0.3
            slytherinAnimal = createSprite(200,height/2+50)
            slytherinAnimal.addImage(slytherinAnimalImg)
            slytherinAnimal.scale=0.4
            ravenclawAnimal = createSprite(width-250,height/4-40)
            ravenclawAnimal.addImage(ravenclawAnimalImg)
            ravenclawAnimal.scale=0.3
           
            
        }

        playLevel2(){
            background(harryPotterBg)
           
            textSize(30)
            text("Score:"+score,50,50)
    
    // slytherin
            if(slytherinAnimal.isTouching(slytherin)){
                slytherinAnimal.destroy();
                score = score+10
                animalsFound++
            }
    
            if(mousePressedOver(slytherinAnimal)){
                slytherinAnimal.x=mouseX
                slytherinAnimal.y=mouseY
                if(slytherinAnimal.isTouching(griffindor)||slytherinAnimal.isTouching(ravenclaw)){
                    slytherinAnimal.x = 200
                    slytherinAnimal.y = height/2+50
                    score-=5
                }
            }
    // griffindor
            if(griffindorAnimal.isTouching(griffindor)){
                griffindorAnimal.destroy();
                score = score+10
                animalsFound++
            }
     
            if(mousePressedOver(griffindorAnimal)){
                griffindorAnimal.x=mouseX
                griffindorAnimal.y=mouseY
                if(griffindorAnimal.isTouching(slytherin)||griffindorAnimal.isTouching(ravenclaw)){
                    griffindorAnimal.x = width-250
                    griffindorAnimal.y = height/4-40
                    score-=5
                }
            }
    // ravenclaw
            if(ravenclawAnimal.isTouching(ravenclaw)){
                ravenclawAnimal.destroy();
                score = score+10
                animalsFound++
            }
       
            if(mousePressedOver(ravenclawAnimal)){
                ravenclawAnimal.x=mouseX
                ravenclawAnimal.y=mouseY
                if(ravenclawAnimal.isTouching(slytherin)||ravenclawAnimal.isTouching(griffindor)){
                    ravenclawAnimal.x = width-100
                    ravenclawAnimal.y = height-100
                    score-=5
                }
            }
            if(animalsFound===6){
        gameState=2.5
            }
            drawSprites();
        }



startLevel3(){
            ravenclaw.destroy();
            griffindor.destroy();
            slytherin.destroy();
            pen = createSprite(displayWidth/2-250,displayHeight/2,50,50)
            pen.addImage(penImg)
            pen.scale=0.3
            pencil = createSprite(displayWidth/2+250,displayHeight/2,50,50)
            pencil.addImage(pencilImg)
            pencil.scale=0.3
            eraser = createSprite(displayWidth/2,displayHeight/2,50,50)
            eraser.addImage(eraserImg)
            eraser.scale=0.35
            penSprite = createSprite(width-100,height-100)
            penSprite.addImage(penObj)
            penSprite.scale=0.7
            pencilSprite = createSprite(200,height/2+50)
            pencilSprite.addImage(pencilObj)
            pencilSprite.scale=0.7
            eraserSprite = createSprite(width-250,height/4-40)
            eraserSprite.addImage(eraserObj)
            eraserSprite.scale=0.7
           
            
        }

        playLevel3(){
            background(StationaryBg)
           
            textSize(30)
            text("Score:"+score,50,50)
    
    // pen
            if(penSprite.isTouching(pen)){
                penSprite.destroy();
                score = score+10
                animalsFound++
            }
    
            if(mousePressedOver(penSprite)){
                penSprite.x=mouseX
                penSprite.y=mouseY
                if(penSprite.isTouching(pencil)||penSprite.isTouching(eraser)){
                    penSprite.x = 200
                    penSprite.y = height/2+50
                    score-=5
                }
            }
    // pencil
            if(pencilSprite.isTouching(pencil)){
                pencilSprite.destroy();
                score = score+10
                animalsFound++
            }
     
            if(mousePressedOver(pencilSprite)){
                pencilSprite.x=mouseX
                pencilSprite.y=mouseY
                if(pencilSprite.isTouching(pen)||pencilSprite.isTouching(eraser)){
                    pencilSprite.x = width-250
                    pencilSprite.y = height/4-40
                    score-=5
                }
            }
    // eraser
            if(eraserSprite.isTouching(eraser)){
                eraserSprite.destroy();
                score = score+10
                animalsFound++
            }
       
            if(mousePressedOver(eraserSprite)){
                eraserSprite.x=mouseX
                eraserSprite.y=mouseY
                if(eraserSprite.isTouching(pencil)||eraserSprite.isTouching(pen)){
                    eraserSprite.x = width-100
                    eraserSprite.y = height-100
                    score-=5
                }
            }
            if(animalsFound===9){
        gameState=3.5
            }
            drawSprites();
        }
}
 