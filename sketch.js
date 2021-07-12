

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var canvas, backgroundImage;
var car22
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var scale=0;
var end;
var bg;
var  player, game;
var valocityY;
var velocityX;
var form;
var cars, car1, car2, car3, car4;
var destroy
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground1
var teamCount=0
var team
var lifetime
var background1
var bh=0
var teamRocket;
var width;
var ed;
var edq;
var backGroup;
function preload(){

 bg=loadImage('Background.jpg')
  car22=loadImage('Charizard.png')
  team=loadImage('Teamrocket.png')
car2=loadImage('fireball.png')
edq=loadImage('gameOver.png')
}

function setup(){
 
  engine = Engine.create();
  world = engine.world;

  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 ground1=createSprite(800,550,1800,50)
background1= createSprite(850,200,2000,20)
background1.addImage("background1",bg)

  background1.velocityX = -4;
backGroup= new Group();
}


function draw(){
  background("white")
  Engine.update(engine);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

if(gameState===2){
  game.end()
  backGroup.destroyEach();
  background1.velocityX=0;
  ed = createSprite(700,200,100,80)
  ed.addImage(edq)
}


if(background1.x<522){
  background1.x=background1.width/2
}

teamH();
  text("Charizard's score:"+bh,1000,20)
  
  drawSprites();
  
}
function teamH(){
  if(frameCount%270===0){
    teamCount=frameCount
    teamRocket=createSprite(1500,450,20,20)
  teamRocket.addImage("teamRocket",team)
  teamRocket.velocityX=-5*(frameCount/200)
  teamRocket.scale=0.5/2;
  teamRocket.lifetime=704
  backGroup.add(teamRocket)
  
  }
    
}