let locationX = 0;
let velocityX = 30; //移動速さ

function setup(){ //一度だけ実行する
  frameRate(20);// １秒間20回実行する

  
  createCanvas(400, 300);

  colorMode(HSB);
}

function draw () {//何回も実行される

  //みはじ（道のり　速さ　時間）の法則の計算をしてみる
  // background(0);


  noStroke();//ellipseの枠線を消す
  
  //ellipseに色付けする random関数１８０〜２００までの配色をランダムに表示
  fill(random(180, 200),100, 100, 0.3);

  //width, height canvasで指定した横幅を変数にしている
  ellipse(random(0, width), random(0, height), 80, 80); 


  // let randomTest = random(0,10);
  // console.log(randomTest)

  locationX += velocityX;//x軸に３０pxずつ移動する
  // console.log(locationX)

  if(locationX > 400){ //キャンバスないで繰り返し処理を行うIf文
    locationX = 0;
  }

}
