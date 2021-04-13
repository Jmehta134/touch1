var fixedRect,movingRect,rect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  rect = createSprite(400,200,50,50);
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if (isTouching(movingRect,fixedRect)) {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  } else if (isTouching(rect,movingRect)){
    movingRect.shapeColor="red";
    rect.shapeColor="red";
  } else {
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
    rect.shapeColor="blue";
  }
  drawSprites();
}