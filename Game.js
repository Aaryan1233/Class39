class Game {
  constructor(){}

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
      form = new Form()
      form.display();
    } 
    Car1 = createSprite(100,200); 
    Car1.addImage("Car1",car1I);
    Car2 = createSprite(300,200); 
    Car2.addImage("Car2",car2I);
    Car3 = createSprite(500,200); 
    Car3.addImage("Car3",car3I);
    Car4 = createSprite(700,200);  
    Car4.addImage("Car4",car4I);
    Cars = [Car1,Car2,Car3,Car4];
  }

  play(){
    form.hide();
    //textSize(30);
    //text("Game Start", 120, 100)
    Player.getPlayerInfo(); 

    if(allPlayers !== undefined){ 
      background("#c68767"); 
      image(trackI, 0, -displayHeight*4, displayWidth, displayHeight*5); 
      //var display_position = 130; 
      var Index = 0;  
      var x = 200; 
      var y = 0;
      for(var plr in allPlayers){      
        Index+=1;  
        x = x+200; 
        y = displayHeight - allPlayers[plr].distance; 
        Cars[Index-1].x = x;
        Cars[Index-1].y = y;
        if (Index === player.index){ 
          //Cars[Index-1].shapeColor = "red"; 
          camera.position.x = displayWidth/2; 
          camera.position.y = Cars[Index-1].y; 
          stroke(10);
          fill("Orange"); 
          ellipse(x,y,75,75); 
         

        }
          
       
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update(); 
    } 
    if(keyIsDown(65) && player.index !== null){ 
      player.distance +=60; 
      player.update(); 
}
    if(player.distance>3860){ 
    gameState = 2; 

  }
    drawSprites();
  } 

  end(){ 
    console.log("Game Ended");
    game.update(2); 

  } 

  

}
