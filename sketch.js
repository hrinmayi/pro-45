var bg,bgimg,bg2;
var gameState=0;
var seed,seedimg,fimg;
var f=[];
var w=[];
var wimg,fer,war;
var ground, human,humanimg,humangrp;
var score=0;
var life=100;

function preload(){
    bgimg=loadImage("BG1.png");
    seedimg=loadImage("mangoSeed.png");
    humanimg=loadImage("human.png");
    fimg=loadImage("fertilizer.png");
    wimg=loadImage("wateringCan.png");
}
function setup(){
    canvar=createCanvas(1400,650)
    if(gameState === 0){
        bg=createSprite(700,350,1200,650);
        bg.addImage(bgimg);
        bg.scale=2.69;
        bg.velocityX=-3;
        bg2=createSprite(2095,350,1200,650);
        bg2.addImage(bgimg);
        bg2.scale=2.69;
        bg2.velocityX=-3
        seed=createSprite(100,550,10,10);
        seed.addImage(seedimg);
        seed.scale=0.7;
        ground=createSprite(700,585,1400,20);
        ground.visible=false;
        humangrp=createGroup();
    }
}
function draw(){
    background("green");
    if(gameState === 0){
    if(bg.x<0){
        bg.x=700;
    }
    if(bg2.x<700){
        bg2.x=2095
    }
    if(keyDown(UP_ARROW) && seed.y>350){
        seed.velocityY=-10;

    }
    seed.velocityY+=1;
    seed.collide(ground);
    seed.debug=false;
    seed.setCollider("circle",5,-10,40);
    
    if(humangrp.isTouching(seed)){
        life-=50;
        humangrp.destroyEach();

    }
    if(life === 0){
        gameState="end";
    }
    humans();
    fertilizer();
    water();
}
    
    if(gameState === "end"){
        bg.velocityX=0;
        fer.velocityX=0;
        war.velocityX=0;
        bg2.velocityX=0;
        humangrp.setVelocityXEach(0)

    }

    drawSprites();
    textSize(30);
    fill("black");
    text("life of seed: "+life,1100,50);
    text("score: "+score,1100,90);

}
function humans(){
    if(frameCount %350 === 0){
        human=createSprite(1400,530,10,10);
        human.addImage(humanimg);
        human.velocityX=-3;
        human.scale=0.8;
        human.lifetime=1400/3;
        humangrp.add(human);
    } 
}
function fertilizer(){
    if(frameCount %250 === 0){
       
        f=[fer=createSprite(1400,random (300,450))]
        fer.addImage(fimg);
        fer.velocityX=-3
        fer.scale=0.2;
        
    }
}

function water(){
    if(frameCount %320 === 0){
       
        w=[war=createSprite(1400,random (300,450))]
        war.addImage(wimg);
        war.velocityX=-3
        war.scale=0.6;
        
    }
}