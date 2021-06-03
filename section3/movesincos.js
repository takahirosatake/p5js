let deg = 0;
let vecLocation;
let vecVelocity;


function setup(){

  frameRate(20);

  createCanvas(600, 400);
  colorMode(HSB);
  angleMode(DEGREES)

vecLocation = createVector( width / 2, height / 2 );

  // console.log(sin(0));
  // console.log(sin(30));
  // console.log(sin(60));
  // console.log(sin(90) *100);
}

function draw(){

  background('#fff');

  // vecVelocity = createVector(3, sin(frameCount)*10);

  vecVelocity = createVector(cos(frameCount) *2, sin(frameCount)*2);
  
  vecLocation.add(vecVelocity);

  noStroke();
  fill(200, 100 , 100,1 );
  
  ellipse(vecLocation.x , vecLocation.y, 80);
  
  // deg += 1;

  

  console.log('位置',  vecLocation.y, '速度' , vecVelocity.y);

}
