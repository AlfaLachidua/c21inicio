var rect1, rect2, obj1;

function setup() {
  createCanvas(1200,800);
  //Rectángulo fijo
  rect1 = createSprite(600, 400, 50, 80);
  rect1.shapeColor = "purple";
  rect1. debug = true;
  //Rectángulo que se mueve
  rect2 = createSprite(400,200,80,30);
  rect2.shapeColor = "purple";
  rect2. debug = true;
  obj1 = createSprite (100,100,50,50);
  obj1.shapeColor = "purple";
  obj1.debug =true;
}

function draw() {
  background("pink");  
  rect2.x = World.mouseX;
  rect2.y = World.mouseY;

  if (isTouching(obj1,rect2)){
    rect2.shapeColor = "blue";
    obj1.shapeColor = "blue";
  }
  else {
    rect2.shapeColor = "purple";
    obj1.shapeColor = "purple";
  }
  drawSprites();
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2 
    && object1.y - object2.y < object2.height/2 + object1.height/2 
    && object1.y - object2.y < object2.height/2 + object1.height/2){
    return true;
  }
  else {
    return false;
  }
}