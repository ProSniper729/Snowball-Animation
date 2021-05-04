  Engine = Matter.Engine;
  World = Matter.World;
  Events = Matter.Events;
  Bodies = Matter.Bodies;
 
var snowBalls = [];


function preload(){
  backgroundImg = loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800, 360);
  engine = Engine.create();
  world = engine.world;
  
}

  

function draw() {
  
  background(backgroundImg);
   Engine.update(engine);

   spawnSnow();
  
  //display the paricles 
  for (var i = 0; i < snowBalls.length; i++) {
    snowBalls[i].display();
  }

 
}

function spawnSnow(){
  //create snow
  if(frameCount%20===0){
    snowBalls.push(new Snow(random(width/6-105, width/1+100,),10,10));
  }
  
    
}

