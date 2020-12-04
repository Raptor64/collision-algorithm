var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200, 50, 70);

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
}

function draw() {
  background(255,255,255);  

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;


  if(fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 
    && movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2){
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  }else{
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";

  }

  drawSprites();
}