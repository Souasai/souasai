data = [
    //ここから★3
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
     "rarelity":3},
    {"title":"ハンバーガー",
     "img":"cards/5.jpg",
     "rarelity":3},
    {"title":"担々麺",
     "img":"cards/6.jpg",
     "rarelity":3},
    {"title":"生姜焼き",
     "img":"cards/7.jpg",
     "rarelity":3},
    {"title":"ドライカレー",
     "img":"cards/8.jpg",
     "rarelity":3},
    {"title":"ナポリタン",
     "img":"cards/9.jpg",
     "rarelity":3},
    {"title":"小籠包",
     "img":"cards/10.jpg",
     "rarelity":3},
    {"title":"餃子パーティ",
     "img":"cards/11.jpg",
     "rarelity":3},
    {"title":"たこ焼きパーティ",
     "img":"cards/12.jpg",
     "rarelity":3},
    {"title":"クレープ",
     "img":"cards/13.jpg",
     "rarelity":3},
    {"title":"パフェ",
     "img":"cards/14.jpg",
     "rarelity":3},
    {"title":"クッキー",
     "img":"cards/15.jpg",
     "rarelity":3},
    {"title":"台風待ったなし",
     "img":"cards/16.jpg",
     "rarelity":3},
    {"title":"茶碗蒸し",
     "img":"cards/17.jpg",
     "rarelity":3},
    {"title":"卵かけごはん",
     "img":"cards/18.jpg",
     "rarelity":3},
    {"title":"かぼちゃの煮物",
     "img":"cards/19.jpg",
     "rarelity":3},
    {"title":"豊穣",
     "img":"cards/20.jpg",
     "rarelity":3},
    {"title":"カレー",
     "img":"cards/21.jpg",
     "rarelity":3},
    {"title":"かぼちゃのポタージュ",
     "img":"cards/22.jpg",
     "rarelity":3},
    {"title":"焼きおにぎり",
     "img":"cards/23.jpg",
     "rarelity":3},
    {"title":"ツナ・ピザ",
     "img":"cards/24.jpg",
     "rarelity":3},
    {"title":"ジェノベーゼ",
     "img":"cards/25.jpg",
     "rarelity":3},
    {"title":"ラーメン",
     "img":"cards/26.jpg",
     "rarelity":3},
    {"title":"カラアゲ・アニバーサリー",
     "img":"cards/27.jpg",
     "rarelity":3},
    {"title":"お好み焼き",
     "img":"cards/28.jpg",
     "rarelity":3},
    {"title":"豚汁",
     "img":"cards/29.jpg",
     "rarelity":3},
    {"title":"炊き込みごはん",
     "img":"cards/30.jpg",
     "rarelity":3},
    //ここから★4
    {"title":"ローストビーフ",
     "img":"cards/31.jpg",
     "rarelity":4},
    {"title":"手作りケーキ",
     "img":"cards/32.jpg",
     "rarelity":4},
    {"title":"ビーフシチュー",
     "img":"cards/33.jpg",
     "rarelity":4},
    {"title":"手作りパン",
     "img":"cards/34.jpg",
     "rarelity":4},
    {"title":"ふわとろオムライス",
     "img":"cards/35.jpg",
     "rarelity":4},
    {"title":"チーズタッカルビ",
     "img":"cards/36.jpg",
     "rarelity":4},
    {"title":"ラザニア",
     "img":"cards/37.jpg",
     "rarelity":4},
    {"title":"イマジナリ・アラウドン",
     "img":"cards/38.jpg",
     "rarelity":4},
    {"title":"トマトソースのパスタ",
     "img":"cards/39.jpg",
     "rarelity":4},
    {"title":"親子丼",
     "img":"cards/40.jpg",
     "rarelity":4},
    {"title":"サラダ",
     "img":"cards/41.jpg",
     "rarelity":4},
    {"title":"ブリのあら煮",
     "img":"cards/42.jpg",
     "rarelity":4},
    {"title":"パンケーキ",
     "img":"cards/43.jpg",
     "rarelity":4},
    {"title":"天ぷらの晩餐",
     "img":"cards/44.jpg",
     "rarelity":4},
    {"title":"干物",
     "img":"cards/45.jpg",
     "rarelity":4},
    //ここから★5
    {"title":"焼肉",
     "img":"cards/46.jpg",
     "rarelity":5},
    {"title":"ステーキ",
     "img":"cards/47.jpg",
     "rarelity":5},
    {"title":"ヘブンズ・ビール",
     "img":"cards/48.jpg",
     "rarelity":5},
    {"title":"寿司",
     "img":"cards/49.jpg",
     "rarelity":5},
    {"title":"理想の燻製",
     "img":"cards/50.jpg",
     "rarelity":5}
]


//クエリパラメータを取得する(written by 岡田)
const url = new URL(location.href);
const params = new URLSearchParams(url.search);

$(function(){

    //結果のリセット
    function viewReset(){
        //前回結果を消す
        $('#result').html("");
        //ガチャの画像を消す
        $('#gachaimage').html("");
        //【ボタンを消す（二重決済防止）】
        $('#btn').hide();
    } 

    //結果生成
    function createResult(){  
        //dataのid番目の情報をresultに入れる。
        result = [data.concat()[params.get('id')]];
    }

    

    //結果表示
    function showResult(){
        //召喚中画面再生
        $('<div class="image"><img src="images/gacha.gif"></div>').appendTo('#loadarea').hide().fadeIn(2000);
        //召喚中画面が再生され終わったら消え、結果表示用の画面が出る
        
        setTimeout(function(){
            $('#loadarea').html("");
            $('<p>ガチャ結果</p>').appendTo('#result');
            
            $.each(result, function(key, value){
            $('<div class="title">' + value.title + ' ★' + value.rarelity + '</div>').appendTo('#result');
            $('<div class="image"><img src="' + value.img + '"></div><br>').appendTo('#result');
            })
            },
            3000)
    }


    
    

    $('#btn').click(function(){
        viewReset();
        createResult();
        showResult();  
    })
    
})
      