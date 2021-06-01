let locationX = 0;

function setup(){ //一度だけ実行する
  frameRate(1);// １秒間一回実行する

  
  createCanvas(400, 300);
}

function draw () {//何回も実行される
  background(51);
  ellipse(locationX, 50, 80, 80); 
  locationX += 10
}
