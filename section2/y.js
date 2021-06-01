let locationX, locationY;  


let velocityX, velocityY;

function setup(){ //一度だけ実行する
  frameRate();// １秒間20回実行する

  
  createCanvas(600, 400);
  colorMode(HSB);

  locationX = width / 2;
  locationY = height / 2;
  velocityX = 2;
  velocityY = 5;
}

function draw () {//何回も実行される
  background('#fff')
  noStroke();
  fill(200,100, 100, 1);

  //width, height canvasで指定した横幅を変数にしている
  ellipse(locationX, locationY,80,80);

  locationX -= velocityX;
  locationY -= velocityY;

  if(locationY > 400) {
    locationX = width / 2; 
    locationY = height / 2;
  }
  if(locationY < 0) {
    locationX = width / 2; 
    locationY = height / 2;
  }

}
