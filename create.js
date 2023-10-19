data = [
  {"title":"チキンのトマト煮",
   "img":"cards/1.jpg",
   "rarelity":3},
  {"title":"肉じゃが",
   "img":"cards/2.jpg",
   "rarelity":3},
  {"title":"ハンバーグ",
   "img":"cards/3.jpg",
   "rarelity":3},
  {"title":"激辛麻婆豆腐",
   "img":"cards/4.jpg",
   "rarelity":3}
]






// 親divのID
const parentId = 'gacha'; // このIDを実際のIDに変更

// 生成する子divの数
const numberOfChildDivs = 30; // この数を必要な数に変更

// 親divを取得
const parentDiv = document.getElementById(parentId);

if (parentDiv) {
  // 指定した数の子divを生成
  for (let i = 0; i < numberOfChildDivs; i++) {
    const childDiv = document.createElement('img');
    
    // 子divのスタイルを設定（サンプルのスタイル）
    var random = Math.floor( Math.random() * 9 );
    childDiv.src="https://www.tirol-choco.com/lineup/images/2303_asrt_varapackcp_" + random + ".png";
    childDiv.style.width = '50px';
    childDiv.style.height = '50px';
    
    // 子divを親divに追加
    parentDiv.appendChild(childDiv);
  }
} else {
  console.log(`指定したID (${parentId}) の親divが見つかりませんでした。`);
}