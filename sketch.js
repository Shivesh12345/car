var car,wall;
wall.shapeColor = (80,80,80)
var speed,weight;



function setup() {
  createCanvas(800,400);
 car = createSprite(50, 200, 50, 50);
 car.velocityX = 5                                                                                                                                                                             
 wall = createSprite(740, 200, 30, height/2);
 
  speed = random(55,90)
  weight = random(400,1500)
}

function draw() {
  background("black");  
  if (car.isTouching(wall))
   car.shapeColor = ("green");
  drawSprites();
}