'use strict';

let card = 1;// 場にあるトランプのカード初期化番号

let Hi_L = 0;// Low(0) と High(1) どっちを選んだか仮の数字（実際にはクリックで決める）
let Result = "●●を選んで、あなたの●●";//勝ち負けの結果の初期値

function High_Low(Hi_L) {

  // ハイアンドローをするカード番号
  let trump = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  // 重複チェック用配列
  let randoms = [];

  /** 最小値と最大値 */
  var min = 1, max = 13;

  // 重複チェックしながら乱数作成
  for (let i = min; i <= max; i++) {
    while (true) {
      let tmp = trump_n(min, max);
      if (!randoms.includes(tmp)) {
        randoms.push(tmp);
        console.log(randoms)
        break;
      }
    }
  }

  // min以上max以下の整数値の乱数を返す
  function trump_n(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  /* 追加した判定のプログラム */
  if (card < trump[trump_n]) {//賭けカードが、伏せカードより大きい場合
    if (Hi_L === 0) { Result = " LOWを選んで、あなたの『 負け 』"; }
    if (Hi_L === 1) { Result = " HIGHを選んで、あなたの【 勝ち 】"; }
  }

  else if (card > trump[trump_n]) {//賭けカードが、伏せカードより小さい場合
    if (Hi_L === 0) { Result = " LOWを選んで、あなたの【 勝ち 】"; }
    if (Hi_L === 1) { Result = " HIGHを選んで、あなたの『 負け 』"; }
  }

  else { Result = "引き分け！！"; }

  document.getElementById("After").innerHTML = "伏せカードは" + trump[trump_n] + Result + "<br>次のカードが今の数字より高いか低いか考えてみよう！";
  document.getElementById("Before").innerHTML = "場にあるカードは" + card;

  card = trump[trump_n];//場にあるカードを新しく引いたカードに変える

}