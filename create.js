//クエリパラメータを取得する
const url = new URL(location.href);
const params = new URLSearchParams(url.search);



// 親divのID
const parentId = 'gacha'; // このIDを実際のIDに変更



// 生成する子divの数
const numberOfChildDivs = params.get('id'); // クエリパラメータのidから取得

// 親divを取得
const parentDiv = document.getElementById(parentId);

let counter = 0;
var intervalID;

function addChoco(){

  if(counter >= numberOfChildDivs - 1){
    clearInterval(intervalID);
    console.log("繰り返しが終了しました");
  }

  const childDiv = document.createElement('img');
    
  // 子divのスタイルを設定（サンプルのスタイル）
  childDiv.src='https://www.tirol-choco.com/resource/images/index/img_tirol_02.png';
  childDiv.style.width = '50px';
  childDiv.style.height = '50px';
  
  // 子divを親divに追加
  parentDiv.appendChild(childDiv);

  console.log(++counter);

  if(counter >= numberOfChildDivs){
	
    element = document.createElement('span');
	element.classList.add('count-up');
	element.textContent = numberOfChildDivs;
	element.id = "num";
	document.getElementById("result_num").appendChild(element);
	console.log("値を変更しました");
  }
}


intervalID = setInterval(addChoco,1000);


//最後の数字を出す時に数字をかっこよく表示させるやつ

// カウントアップ関数
function countUp() {
    $("#result_num .count-up").each(function () {
        if (!$(this).hasClass('counted')) {
            $(this).addClass('counted');
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 400,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                },
            });
        }
    });
}

// Mutation Observerのコールバック関数
const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            observer.disconnect(); // 監視を一時的に解除
            countUp();
            observer.observe(document.querySelector('#result_num'), config); // 監視を再開
        }
    }
};

// Mutation Observerのオプション
const config = { childList: true, subtree: true };

// Mutation Observerを作成し、監視を開始
const observer = new MutationObserver(callback);
observer.observe(document.querySelector('#result_num'), config);
