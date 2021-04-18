var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
   Car1image=loadImage("images/car1.png");
   Car2image=loadImage("images/car2.png");
   Car3image=loadImage("images/car3.png");
   Car4image=loadImage("images/car4.png");
   groundimage=loadImage("images/ground.png");
   trackimage=loadImage("images/track.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
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
    game.play();}

    if(gameState===2){
      game.end();
    }
}
