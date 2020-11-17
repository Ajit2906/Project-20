function setup() {
  createCanvas(1600,400);
  Car=createSprite(50, 200, 50, 50);
  Car.shapeColor="white"
  wall=createSprite(1500,200,60,200)
   wall.shapeColor='grey'
 
  speed=random(55,90)
  weight=random(400,1500)
  Car.velocityX=speed
}

function draw() {
  background(0);  
  if(wall.x-Car.x < (Car.width+wall.width)/2) 
  { Car.velocityX=0; 
    var deformation=0.5 * weight * speed* speed/22500; 
    if(deformation>180) { Car.shapeColor=color(255,0,0); 
    } 
    if(deformation<180 && deformation>100) 
    { 
      Car.shapeColor=color(230,230,0); }
       if(deformation<100) {
          Car.shapeColor=color(0,255,0); } 
       }

  
  
  drawSprites();
}