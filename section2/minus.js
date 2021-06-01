let locationX, locationY;  


let velocityX, velocityY;

function setup(){ //一度だけ実行する
  frameRate(300);// １秒間20回実行する

  
  createCanvas(600, 400);
  colorMode(HSB);

  locationX = width / 2;
  locationY = height / 2;
  velocityX = 10;
  velocityY = 10;
}

function draw () {//何回も実行される
  background('#fff')
  noStroke();
  fill(200,100, 100, 1);

  //width, height canvasで指定した横幅を変数にしている
  ellipse(locationX, locationY,80,80);

  locationX += velocityX;
  locationY += velocityY;

  if(locationX > width || locationX < 0 ){
    velocityX = velocityX*-1;
  }
  // if(locationX < 0){
  //   velocityX = velocityX*-1;
  // }

  if(locationY > height || locationY < 0 ){
    velocityY = velocityY*-1;
  }

}
