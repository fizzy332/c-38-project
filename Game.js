
class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
     
    }
  
    car1 = createSprite(110,400);
   car1.scale=0.2
    car1.addImage("car1",car22)
   
   
  }
  

  play(){


    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
    
      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        
        //use data form the database to display the cars in y direction
    
        if (index === player.index){
         
          camera.position.x = displayWidth/2;
          camera.position.y = cars1.y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

     
     if(keyIsDown(UP_ARROW)&& car1.y >= 100) {
     car1.velocityY = -10;
      
     
      player.update();
     }
  car1.velocityY=car1.velocityY+0.5
   
  car1.collide(ground1)
 
if(car1.isTouching(backGroup)){
gameState=2
}
drawSprites();
  }
  end(){

car1.destroy();

  }
}
