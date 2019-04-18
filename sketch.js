var x = 0
var speed 
var w = 1

function setup() {
  createCanvas(1000,1000);
  //background(255,0,255);
}

function draw() {
   background(255,0,255)      
   fill(random (1,255));
  
  if(x > 600 - w/2){
 
 speed = speed - 3;//or speed =- 3
  }
  
   if(x < 0 + w/2 ){
  speed = speed =+ 3;//or speed =+ 3
  }
  
  ellipse(x, 300, w)
  
  x = x + speed
  w = w + 1
 
}




 // try x = 1 after if x > 600
