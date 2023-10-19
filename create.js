console.log("f");

// 親divのID
const parentId = 'gacha'; // このIDを実際のIDに変更

// 生成する子divの数
const numberOfChildDivs = 0; // この数を必要な数に変更

// 親divを取得
const parentDiv = document.getElementById(parentId);

if (parentDiv) {
  // 指定した数の子divを生成
  for (let i = 0; i < numberOfChildDivs; i++) {
    const childDiv = document.createElement('img');
    
    // 子divのスタイルを設定（サンプルのスタイル）
    childDiv.src='https://www.tirol-choco.com/resource/images/index/img_tirol_02.png';
    childDiv.style.width = '50px';
    childDiv.style.height = '50px';
    
    // 子divを親divに追加
    parentDiv.appendChild(childDiv);
  }
} else {
  console.log(`指定したID (${parentId}) の親divが見つかりませんでした。`);
}


function addChoco(){
  const childDiv = document.createElement('img');
    
  // 子divのスタイルを設定（サンプルのスタイル）
  childDiv.src='https://www.tirol-choco.com/resource/images/index/img_tirol_02.png';
  childDiv.style.width = '50px';
  childDiv.style.height = '50px';
  
  // 子divを親divに追加
  parentDiv.appendChild(childDiv);
}


var intervalID = setInterval(addChoco,1000);