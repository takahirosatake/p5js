let locationX = 0;
let velocityX = 30; //移動速さ

function setup(){ //一度だけ実行する
  frameRate(20);// １秒間20回実行する

  
  createCanvas(400, 300);

  colorMode(HSB);
}

function draw () {//何回も実行される

  //みはじ（道のり　速さ　時間）の法則の計算をしてみる
  background('#a683c1');


  noStroke();//ellipseの枠線を消す
  fill(random(180, 200),100, 100, 1);//ellipseに色付けする random関数１８０〜２００までの配色をランダムに表示
  ellipse(locationX, 50, 80, 80); 

  // let randomTest = random(0,10);
  // console.log(randomTest)

  locationX += velocityX;//x軸に３０pxずつ移動する
  // console.log(locationX)

  if(locationX > 400){ //キャンバスないで繰り返し処理を行うIf文
    locationX = 0;
  }

}
