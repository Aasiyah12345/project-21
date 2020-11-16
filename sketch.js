var thickness,wall;
var bullet, weight, bullet;

function setup() {
  createCanvas(1600,400);
  speed=random(5223,321)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprites(50, 200, 60, 5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(225);

  wall=createSprite(1500,200,thickness,height/2)
  wall.shapeColor=color(230,230,230);
}
  


function draw() {
  background(0);
  if(hasCollided(bullet,wall))  
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
 
  drawSprites();
}

function hasCollided(bullet, wall)
{
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}