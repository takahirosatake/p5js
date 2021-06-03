let deg = 0;

function setup(){

  frameRate(20);

  createCanvas(600, 400);
  colorMode(HSB);
  angleMode(DEGREES)
  // console.log(sin(0));
  // console.log(sin(30));
  // console.log(sin(60));
  // console.log(sin(90) *100);
}

function draw(){

  background('#fff');
  noStroke();
  fill(200, 100 , 100,1 );
  
  ellipse(width / 2, height / 2, cos(frameCount) * 100);
  
  deg += 1;

  console.log(cos(frameCount), frameCount);

}
