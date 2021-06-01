//ベクトル

let vecLocation;//ベクトル・・xとyがセットとなる　キャメルケースで記入
let vecVelocity;
let vecAccel;


function setup(){ //一度だけ実行する
  frameRate(10);// １秒間20回実行する

  
  createCanvas(600, 400);
  colorMode(HSB);

  vecLocation = createVector(width / 2 , height / 2);
  console.log(vecLocation);


  vecVelocity = createVector(10, 5);

  vecAccel = createVector(-1 , 0.01);

}

function draw () {//何回も実行される
  background('#fff')
  noStroke();
  fill(200,100, 100, 1);

  ellipse(vecLocation.x, vecLocation.y ,80,80);

  vecVelocity.y += vecAccel.y;
  vecLocation.y += vecVelocity.y;

  if(vecLocation.y > height || vecLocation.y < 0) { 
    vecVelocity.y = vecVelocity.y*-1
   }

}

