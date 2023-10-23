data = {
  "1": "Cランク",
  "5": "Bランク",
  "10": "Aランク",
  "30": "Sランク"
}

//クエリパラメータを取得する
const url = new URL(location.href);
const params = new URLSearchParams(url.search);

// 親divのID
const parentId = 'gacha'; // このIDを実際のIDに変更

//chocoの数
const numChoco = params.get('num');

// 親divを取得
const parentDiv = document.getElementById(parentId);

let counter = 0;
var intervalID;

function addChoco(){

  if(counter >= numChoco - 1){
    clearInterval(intervalID);
    console.log("繰り返しが終了しました");
  }

  const childDiv = document.createElement('img');
    
  // 子divのスタイルを設定（サンプルのスタイル）
  var random = Math.floor( Math.random() * 9 );
  childDiv.src="./images/" + random + ".png";
  
  // 子divを親divに追加
  parentDiv.appendChild(childDiv);

  console.log(++counter);
}


intervalID = setInterval(addChoco,1000);

var setT1 = setTimeout(function() {  
  Swal.fire({
    title: data[numChoco] + '：' + numChoco + '個',
    text: '遊んでくれてありがとう！',
    imageUrl: './images/result.png',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}, 1000 * (numChoco) + 1000)