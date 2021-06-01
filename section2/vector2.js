let vecLocation;//ベクトル・・xとyがセットとなる　キャメルケースで記入
let vecVelocity;
let vecAccel;


function setup(){ //一度だけ実行する
  frameRate();// １秒間20回実行する

  
  createCanvas(600, 400);
  colorMode(HSB);

  vecLocation = createVector(width / 2 , height / 2);
  console.log(vecLocation);


  vecVelocity = createVector(10,10);

  vecAccel = createVector(0.1 , 0.5);

}

function draw () {//何回も実行される
  background('#fff')
  noStroke();
  fill(200,100, 100, 1);

  ellipse(vecLocation.x, vecLocation.y ,80,80);

  // vecVelocity.y += vecAccel.y;
  // vecLocation.y += vecVelocity.y;

  vecVelocity.add(vecAccel); 
  //vecVelocity(10, 10) + vecAccel(0.1 , 0.5) = vecVelocity(10.1, 10.5);
  vecLocation.add(vecVelocity);
//vecLocation(10, 10) + vecVelocity(0.1 , 0.5) = vecLocation(310.1, 210.5);

  if(vecLocation.x > width || vecLocation.x < 0){
    vecVelocity.x *= -1;
  }

  if(vecLocation.y > height || vecLocation.y < 0) { 
    vecVelocity.y *= -1;
   }

}
