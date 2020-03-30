var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game; 
var Car1,Car2,Car3,Car4; 
var Cars; 
var car1I,car2I,car3I,car4I, trackI, groundI;

function preload(){ 
  car1I = loadImage("Sprites/car1.png"); 
  car2I = loadImage("Sprites/car2.png"); 
  car3I = loadImage("Sprites/car3.png"); 
  car4I = loadImage("Sprites/car4.png"); 
  trackI = loadImage("Sprites/track.jpg"); 
  groundI = loadImage("Sprites/ground.png");

} 


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start(); 
} 


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  } 
  if(gameState === 2){ 
    game.end();
  }
}
