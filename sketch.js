function setup(){
  createCanvas(1600,400);
  
  speed=random(55,90)
  weight= random(400,1500)
  
  car= createSprite(50,200,50,50);
car.velocityX =speed;
car.shapecolor=color(255);

wall=createSprite(650,200,50,200);
wall.shapecolor=color(255);

}

function draw(){
  background(0);
  drawSprites();
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car.shapecolor= color("red");
    }
    if(deformation<180 && deformation>100)
    {
      car.shapecolor=color("yellow");
    }
    if(deformation<100)
    {
      car.shapecolor=color("green");
    }


  }
 
}