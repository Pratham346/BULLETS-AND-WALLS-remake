var wall,wall2;
var bullet,bullet2;
var speed, speed2;
var weight, weight2;
var thickness,thickness2;

function setup() {
  createCanvas(1600,800);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,100);
  
  speed2=random(500,1000);
  weight2=random(50,82);
  thickness2=random(22,200);
  
  

  bullet=createSprite(50,150,50,30);
  bullet.velocityX=speed;
  bullet.shapeColor=color(250,250,250);
  wall=createSprite(1200,150,thickness,200);
  wall.shapeColor=(80,80,80);

  bullet2=createSprite(50,400,50,30);
  bullet2.velocityX=speed;
  bullet2.shapeColor=color(250,250,250);
  wall2=createSprite(1200,400,thickness,200);
  wall2.shapeColor=(80,80,80);

}

function draw() {
  background(0,0,0); 
  
  if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
    if(hasCollided(bullet2,wall2)){
    bullet2.velocityX=0;
    var damage2 = 5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage2>10){
      wall2.shapeColor=color(255,0,0);
    }

    if(damage2<10){
      wall2.shapeColor=color(0,255,0);
    }
  }
   drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){

  return true;
}
return false;

}
function hasCollided(lbullet2,lwall2){
    bullet2RightEdge=lbullet2.x+lbullet2.width;
    wall2LeftEdge=lwall2.x;
  
  
  if(bullet2RightEdge>=wall2LeftEdge){
  
    return true;
  }
  return false;
  
  }