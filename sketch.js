var bullet, speed, weight, wall, thickness;

function setup() {
  createCanvas(800, 400);
  speed = random(123, 221);
  weight = random(30, 52);
  bullet = createSprite(50, 200, 50, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255, 255, 255);
  thickness = random(22, 83);
  wall = createSprite(700, 200 , thickness, 200);
  wall.shapeColar = color(80, 80, 80);
}

function draw() {
  background(0, 0, 0); 
  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if (damage > 10){
      wall.shapeColor = color(255, 0, 0);
    }
    if (damage <= 10){
      wall.shapeColor = color(0, 255,0);
    }
  }
  drawSprites();
}

function hasCollided(Lbullet, Lwall){
  bulletRightEdge = Lbullet.x + Lbullet.width/2;
  wallLeftEdge = Lwall.x - Lwall.width/2;
  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}