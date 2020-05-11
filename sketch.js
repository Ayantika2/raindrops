function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  


  var i = 0;
 ( i = 0 , i = 100, 1++) {
 var Rain = new rain(rand,0);
 Rain.display();
 }
  drawSprites();
}