let vecLocation;
let vecVelocity;
let hue;

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

  // console.log(abs(sin(frameCount) * 360));//絶対値で360から０の間を動いている

  hue = (ceil(abs(sin(frameCount) * 360)));//ceil小数点を繰り上げ floor切り下げ

  vecVelocity = createVector(cos(frameCount) *2, sin(frameCount)*2);
  
  vecLocation.add(vecVelocity);

  noStroke();
  fill(hue, 100 , 100,1 );
  
  ellipse(vecLocation.x , vecLocation.y, 80);


}
