let vecLocation = [];//ベクトルを配列で設定する
let vecVelocity = [];
let vecAccel = [];
let randomColor = [];
let randomBallSize = [];

let num = 20;


function setup(){ //一度だけ実行する
  frameRate();// １秒間20回実行する

  
  createCanvas(600, 400);
  colorMode(HSB);

  for(let i = 0; i < num; i++){
    vecLocation[i] =createVector(width / 2 ,height / 2); 

    vecVelocity[i] = createVector(random(2,5), random(2, 8));

    vecAccel[i] = createVector(0, 0.5);

    randomColor[i] = random(0, 360);
    randomBallSize[i] =random(20, 80)
  }

  

}

function draw () {//何回も実行される
  background('#fff')
  
  for (let i = 0; i< num; i++){
    noStroke();
    fill(randomColor[i] ,100, 100, 1);

    ellipse(vecLocation[i].x, vecLocation[i].y ,randomBallSize[i] );
    
    vecVelocity[i].add(vecAccel[i]);
    vecLocation[i].add(vecVelocity[i]);
    
    
    if(vecLocation[i].x > width || vecLocation[i].x < 0){
      vecVelocity[i].x *= -1;
    }
    
    if(vecLocation[i].y > height || vecLocation[i].y < 0) { 
      vecVelocity[i].y *= -1;
    }
  }
    
}
  