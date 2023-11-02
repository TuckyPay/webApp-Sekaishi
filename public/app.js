(() => {
    const $txtBox = (document.querySelectorAll("[date-Ans]"));
    const $butotn_01 = document.getElementById("js-button-01");
    const $page = document.getElementById("js-pageNum");

    const ANS_LIST = [["工業","産業資本家","ラダイト","工場","移民",
                    "ロバート=オーウェン","フーリエ","エンゲルス","共産党宣言","第1インターナショナル","資本論"
                ],["13植民地","植民地議会","奴隷",
                    "七年","東インド会社","茶","ボストン茶会","フィラデルフィア","大陸会議",
                    "ワシントン","コモン=センス","ジェファソン","フランクリン","ヨークタウン","パリ",
                    "合衆国憲法","三権分立","ワシントン"
                ],["特権","三部会","球戯場","バスティーユ","ヴェルサイユ","人権宣言",
                    "立法議会","義勇","国民公会","ジャコバン","第一共和","対仏大同盟","ロベスピエール",
                    "ナポレオン","統領政府","ナポレオン法典","第一帝","トラファルガー","アウステルリッツ","大陸封鎖","ロシア","エルバ","ワーテルロー","セントヘレナ"
                ],["ナポレオン","トゥサン=ルヴェルチュール","ハイチ","クリオーリョ","シモン=ボリバル","ブラジル",
                    "アメリカ=イギリス","オーストリア","モンロー","モノカルチャー",
                    "メッテルニヒ","タレーラン","正統","ブルボン","ロシア","ドイツ連邦","神聖","四国",
                    "国民国家","自由","国民","ギリシア","ルイ=フィリップ","ベルギー"
                ],]

    console.log(ANS_LIST);
    console.log($txtBox);
    console.log((ANS_LIST[0])[0]);
    
    let pageNum = 0;
    let index = 0;
    let score = 0;

    const init = () => {
        index = 0;
        score = 0;
        let i = 0;
        while(i < $txtBox.length) {
            $txtBox[i].style.backgroundColor = "white"
            i++;
        }
    }
    init();

    const Check = () => {
        
        for(index = 0; index < ANS_LIST[pageNum].length; index++) {
            if($txtBox[index].value == (ANS_LIST[pageNum])[index]) {
                score++;
                $txtBox[index].style.backgroundColor = "white";
            }
            else {
                $txtBox[index].style.backgroundColor = "#ff5959";
            }
        }

        if(score >= $txtBox.length) {
            window.alert("正解！　"+score+"/"+$txtBox.length+"点");
        }
        else {
            window.alert("残念！　"+score+"/"+$txtBox.length+"点");
        }
        score = 0;
    }


    $butotn_01.addEventListener("click", () => {
        Check();
        console.log("True");
    })


    switch($page.textContent) {
        case "18":
            pageNum = 0;
            break;

        case "19":
            pageNum = 1;
        break;

        case "20":
            pageNum = 2;
            break;

        case "21":
            pageNum = 3;
            break;
    }

    

})();