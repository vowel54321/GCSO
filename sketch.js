var car, wall,speed,weight;
function setup() {

  createCanvas(800,400);
  car= createSprite(100, 200, 50, 50);
  car.shapeColor='white';
  wall=createSprite(700,200,70,60);
  wall.shapeColor= rgb(80,80,80);
 speed=random(55,90);
 weight= random(400,1500);
 car.velocityX=speed;
 car.depth=wall.depth+1;
}

function draw() {
  background("teal");  
if(car.x-wall.x<(car.width+wall.width)/2&& wall.x-car.x<(car.width+wall.width)/2)
{
deformation = (0.5*weight*speed*speed)/22500;
car.velocityX=0;
if(deformation<100)
{
  car.shapeColor= "green";
}
else if(deformation>=100&&deformation<=180)
{
  car.shapeColor= "yellow"
}
else if(deformation >180)
{
  car.shapeColor="red";
}
}
  drawSprites();
}