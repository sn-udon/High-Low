'use strict';

let sI = 13;
let hI = 13;
let nI = sI + hI;
let Hi_L = 0;// Low(0) と High(1) どっちを選んだか仮の数字（実際にはクリックで決める）
let Result = "●●を選んで、あなたの●●";//勝ち負けの結果の初期値
let sTrump = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let hTrump = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let deck = sI + hI;
let trump;
let trump_n;
let card;
let nCard;
let sGara;
let tCard;//場にあるカードを書き換えるための変数
let winCnt = 0;
let loseCnt = 0;
let suit = Math.floor(Math.random() * 2);// 場にあるトランプのカードの柄の設定
// トランプの柄の設定
if (suit === 0) {
  sGara = 's';
  card = Math.floor(Math.random() * sI) + 1;
  sI = sI - 1;
  sTrump.splice(card - 1, 1);
} else if (suit === 1) {
  sGara = 'h';
  card = Math.floor(Math.random() * hI) + 1;
  hI = hI - 1;
  hTrump.splice(card - 1, 1);
}

document.getElementById("Before").textContent = "場にあるカードは" + card;
document.getElementById('cib').src = 'trump/' + sGara + '_' + card + '.png';
document.getElementById('rireki').textContent = "残りのカードは";
document.getElementById('srireki').textContent = "♠山札に" + `[` + sTrump + `]の` + sTrump.length + '枚と';
document.getElementById('hrireki').textContent = "♡山札に" + `[` + hTrump + `]の` + hTrump.length + '枚！';

// ボタンをクリックした後に動くファンクション
function High_Low(Hi_L) {

  // ♠と♡の山札が両方あるとき
  if (sI > 0 && hI > 0) {

    // 伏せられたカードを山札から除外する
    suit = Math.floor(Math.random() * 2);// 場にあるトランプのカードの柄の設定

    if (suit === 0) {
      sGara = 's';
      trump_n = Math.floor(Math.random() * sI);
      sI = sI - 1;
      nCard = sTrump[trump_n]
      for (let item of sTrump) {
        if (item === nCard) {
          sTrump.splice(trump_n, 1);
        }
      }
    } else if (suit === 1) {
      sGara = 'h';
      trump_n = Math.floor(Math.random() * hI);
      hI = hI - 1;
      nCard = hTrump[trump_n]
      for (let item of hTrump) {
        if (item === nCard) {
          hTrump.splice(trump_n, 1);
        }
      }
    }

  } else if (sI === 0 && hI > 0) { //♠の山札が0枚になったとき
    sGara = 'h';
    trump_n = Math.floor(Math.random() * hI);
    hI = hI - 1;
    nCard = hTrump[trump_n]
    for (let item of hTrump) {
      if (item === nCard) {
        hTrump.splice(trump_n, 1);
      }
    }
  } else if (sI > 0 && hI === 0) { //♡の山札が0枚になったとき
    sGara = 's';
    trump_n = Math.floor(Math.random() * sI);
    sI = sI - 1;
    nCard = sTrump[trump_n]
    for (let item of sTrump) {
      if (item === nCard) {
        sTrump.splice(trump_n, 1);
      }
    }
  }


  document.getElementById('cia').src = 'trump/' + sGara + '_' + nCard + '.png';

  /* 追加した判定のプログラム */
  if (card < nCard) {//賭けカードが、伏せカードより大きい場合
    if (Hi_L === 0) {
      Result = " LOWを選んで、あなたの『 負け 』";
      loseCnt = loseCnt + 1;
    }
    if (Hi_L === 1) {
      Result = " HIGHを選んで、あなたの【 勝ち 】";
      winCnt = winCnt + 1;
    }
  }

  else if (card > nCard) {//賭けカードが、伏せカードより小さい場合
    if (Hi_L === 0) {
      Result = " LOWを選んで、あなたの【 勝ち 】";
      winCnt = winCnt + 1;
    }
    if (Hi_L === 1) {
      Result = " HIGHを選んで、あなたの『 負け 』";
      loseCnt = loseCnt + 1;
    }
  }

  else if (card === nCard) { Result = "で引き分け！！"; }//同じ数字が出た場合

  document.getElementById("After").innerHTML = "伏せカードは" + nCard + Result + "<br>次のカードが今の数字より高いか低いか考えてみよう！";
  document.getElementById('rireki').textContent = "残りのカードは";
  document.getElementById('srireki').textContent = "♠山札に" + `[` + sTrump + `]の` + sTrump.length + '枚と';
  document.getElementById('hrireki').textContent = "♡山札に" + `[` + hTrump + `]の` + hTrump.length + '枚！';

  card = nCard;//場にあるカードを新しく引いたカードに変える
  tCard = card;//場にあるカードを新しく引いたカードの画像に変える為の変数に入れる

  // 場にあるカード画像を新しく引いたカード画像に入れ替える
  if(sI + hI > 0) {
    $('#kekka').text('次の勝負まで');
    $('#button').text('');
    $(function(){
      $('#scount').text('3...')
      setTimeout(function() {
      $('#scount').text('2...')
      }, 1000);
      setTimeout(function(){
      $('#scount').text('1...')
      }, 2000);
      setTimeout(function(){
      $('#kekka').text('')
      $('#scount').text('')
      $('#cib').attr('src','trump/' + sGara + '_' + card + '.png');
      $('#cia').attr('src','trump/s_0.png');
      $("#Before").html("場にあるカードは" + tCard + "<br>次のカードが今の数字より高いか低いか考えてみよう！");
      $('#After').text('');
      $('#button').html('<input type="button" value="High" class="hbutton" onclick="High_Low(1);">' + 'or' + '<input type="button" value="Low" class="lbutton" onclick="High_Low(0);">');
      }, 3000);
    });
  }
  // 結果
  // 山札が0枚になったときに結果ボタンを配置する
  if (sI + hI === 0) {
    if (winCnt > loseCnt) {
      $('#win').removeClass('win');
      $('#top').removeClass('top');
      $('#kekka').text('であなたの勝ち！')
    }
    if (winCnt < loseCnt) {
      $('#lose').removeClass('lose');
      $('#top').removeClass('top');
      $('#kekka').text('であなたの負け...')
    }
    if (winCnt === loseCnt) {
      $('#draw').removeClass('draw');
      $('#top').removeClass('top');
      $('#kekka').text('で引き分け')
    }

    document.getElementById("After").textContent = "";
    document.getElementById("Before").textContent = "";
    document.getElementById('rireki').textContent = "";
    document.getElementById('srireki').textContent = "";
    document.getElementById('hrireki').textContent = "";
    document.getElementById('button').textContent = "";
    document.getElementById('syuryo').textContent = "ゲーム終了！";
    document.getElementById('kwin').textContent = "あなたの勝利数は" + winCnt;
    document.getElementById('klose').textContent = "あなたの敗北数は" + loseCnt;
  }
}
