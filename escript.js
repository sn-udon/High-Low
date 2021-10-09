'use strict';

let i = 13;
let Hi_L = 0;// Low(0) と High(1) どっちを選んだか仮の数字（実際にはクリックで決める）
let Result = "●●を選んで、あなたの●●";//勝ち負けの結果の初期値
let trump = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let trump_n;
let card = Math.floor(Math.random() * i) + 1;// 場にあるトランプのカード初期化番号
let tCard;//場にあるカードを書き換えるための変数
let winCnt = 0;
let loseCnt = 0;

document.getElementById("Before").textContent = "場にあるカードは" + card;
document.getElementById('cib').src = 'trump/s_' + card + '.png';
// $('#Before').attr('src', 'trump/s_ + card + .png')
trump.splice(card - 1, 1);
i = i - 1;

document.getElementById('rireki').textContent = "残りのカードは" + `[` + trump + `]の` + trump.length + '枚！';

// ボタンをクリックした後に動くファンクション
function High_Low(Hi_L) {

  // 伏せられたカードを山札から除外する
  let trump_n = Math.floor(Math.random() * i);
  let nCard = trump[trump_n]
  document.getElementById('cia').src = 'trump/s_' + nCard + '.png';

  for (let item of trump) {
    if (item === nCard) {
      trump.splice(trump_n, 1);
    }
  }

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

  i--;

  document.getElementById("After").innerHTML = "伏せカードは" + nCard + Result + "<br>次のカードが今の数字より高いか低いか考えてみよう！";
  document.getElementById("Before").innerHTML = "場にあるカードは" + card;
  document.getElementById('rireki').textContent = "残りのカードは" + `[` + trump + `]`;

  card = nCard;//場にあるカードを新しく引いたカードに変える
  tCard = card;//場にあるカードを新しく引いたカードの画像に変える為の変数に入れる

  // 場にあるカード画像を新しく引いたカード画像に入れ替える
  if(i > 0) {
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
      $('#cib').attr('src','trump/s_' + tCard + '.png');
      $('#cia').attr('src','trump/s_0.png');
      $("#Before").html("場にあるカードは" + tCard + "<br>次のカードが今の数字より高いか低いか考えてみよう！");
      $('#After').text('');
      $('#button').html('<input type="button" value="High" class="hbutton" onclick="High_Low(1);">' + 'or' + '<input type="button" value="Low" class="lbutton" onclick="High_Low(0);">');
      }, 3000);
    });
  }

  // 山札が0枚になったときに結果ボタンを配置する
  if (i === 0) {
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
    document.getElementById('button').textContent = "";
    document.getElementById('syuryo').textContent = "ゲーム終了！";
    document.getElementById('kwin').textContent = "あなたの勝利数は" + winCnt;
    document.getElementById('klose').textContent = "あなたの敗北数は" + loseCnt;
  }
}
