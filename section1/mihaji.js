let locationX = 0;
let velocityX = 30; //移動速さ

function setup(){ //一度だけ実行する
  frameRate(20);// １秒間20回実行する

  
  createCanvas(400, 300);
}

function draw () {//何回も実行される

  //みはじ（道のり　速さ　時間）の法則の計算をしてみる
  background(51);
  ellipse(locationX, 50, 80, 80); 
  locationX += velocityX;//x軸に３０pxずつ移動する
  console.log(locationX)

  if(locationX > 400){ //キャンバスないで繰り返し処理を行うIf文
    locationX = 0;
  }

}
