function setup(){ //一度だけ実行する
  frameRate(1);//大文字と小文字は別物 １秒の間で更新される数
  
  createCanvas(400, 300);
}

function draw () {//何回も実行される
  ellipse(50, 50, 80, 80); //x軸　横幅　縦幅

  ellipse(200, 100, 100, 80);

  circle(30, 30, 80); //x軸　y軸　円の直径
  console.log(1);
}
