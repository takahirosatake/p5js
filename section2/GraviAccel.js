let locationX, locationY;  
let velocityX, velocityY;
let accelX , gravity;


function setup(){ //一度だけ実行する
  frameRate(10);// １秒間20回実行する

  
  createCanvas(600, 400);
  colorMode(HSB);

  locationX = width / 2;
  locationY = height / 2;
  velocityX = 10;
  velocityY = 5;
  accelX = -1;
  gravity = 0.01;
}

function draw () {//何回も実行される
  background('#fff')
  noStroke();
  fill(200,100, 100, 1);

  //width, height canvasで指定した横幅を変数にしている
  ellipse(locationX, locationY ,80,80);


  // velocityX += accelX;
  // locationX += velocityX;


  // if(locationX > width){
  //   locationX = 0
  // }

  // if(locationX > width || locationX < 0 ){
  //    velocityX = velocityX*-1;
  // }

  velocityY += gravity;
  locationY += velocityY;

  if(locationY > height || locationY < 0) { 
    velocityY = velocityY*-1
   }

  console.log('位置', locationY, '速度' , velocityY, '重力加速度', gravity);

}
