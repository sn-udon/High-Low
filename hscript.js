'use strict';

let i = 13;
let sI = 13;
let hI = 13;
let cI = 13;
let dI = 13;
let nI = sI + hI + cI + dI;
let Hi_L = 0;// Low(0) と High(1) どっちを選んだか仮の数字（実際にはクリックで決める）
let Result = "●●を選んで、あなたの●●";//勝ち負けの結果の初期値
let sTrump = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let hTrump = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let cTrump = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let dTrump = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let trump;
let trump_n;
let card;
let nCard;
let sGara;
let suit = Math.floor(Math.random() * 4);// 場にあるトランプのカードの柄の設定
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
} else if (suit === 2) {
  sGara = 'c';
  cI = cI - 1;
  card = Math.floor(Math.random() * cI) + 1;
  cTrump.splice(card - 1, 1);
} else if (suit === 3) {
  sGara = 'd';
  card = Math.floor(Math.random() * dI) + 1;
  dI = dI - 1;
  dTrump.splice(card - 1, 1);
}
let tCard;//場にあるカードを書き換えるための変数
let winCnt = 0;
let loseCnt = 0;

document.getElementById("Before").textContent = "場にあるカードは" + card;
document.getElementById('cib').src = 'trump/' + sGara + '_' + card + '.png';
document.getElementById('rireki').textContent = "只今" + winCnt + '連勝中！';

// ボタンをクリックした後に動くファンクション
function High_Low(Hi_L) {

  // 場にあるカード画像を新しく引いたカード画像に入れ替える
  // if (sI + hI + cI + dI < 51 && sI + hI + cI + dI >= 0) {
  //   document.getElementById('cib').src = 'trump/' + sGara + '_' + card + '.png';
  // }

  if (sI > 0 && hI > 0 && cI > 0 && dI > 0) {

    // 伏せられたカードを山札から除外する
    suit = Math.floor(Math.random() * 4);// 場にあるトランプのカードの柄の設定

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
    } else if (suit === 2) {
      sGara = 'c';
      trump_n = Math.floor(Math.random() * cI);
      cI = cI - 1;
      nCard = cTrump[trump_n]
      for (let item of cTrump) {
        if (item === nCard) {
          cTrump.splice(trump_n, 1);
        }
      }
    } else if (suit === 3) {
      sGara = 'd';
      trump_n = Math.floor(Math.random() * dI);
      dI = dI - 1;
      nCard = dTrump[trump_n]
      for (let item of dTrump) {
        if (item === nCard) {
          dTrump.splice(trump_n, 1);
        }
      }
    }
  } else if (sI === 0 && hI > 0 && cI > 0 && dI > 0) {  // スペード以外が残ってる場合

    // 伏せられたカードを山札から除外する
    suit = Math.floor(Math.random() * 3);// 場にあるトランプのカードの柄の設定

    if (suit === 0) {
      sGara = 'h';
      trump_n = Math.floor(Math.random() * hI);
      hI = hI - 1;
      nCard = hTrump[trump_n]
      for (let item of hTrump) {
        if (item === nCard) {
          hTrump.splice(trump_n, 1);
        }
      }
    } else if (suit === 1) {
      sGara = 'c';
      trump_n = Math.floor(Math.random() * cI);
      cI = cI - 1;
      nCard = cTrump[trump_n]
      for (let item of cTrump) {
        if (item === nCard) {
          cTrump.splice(trump_n, 1);
        }
      }
    } else if (suit === 2) {
      sGara = 'd';
      trump_n = Math.floor(Math.random() * dI);
      dI = dI - 1;
      nCard = dTrump[trump_n]
      for (let item of dTrump) {
        if (item === nCard) {
          dTrump.splice(trump_n, 1);

        }
      }
    }
  } else if (hI === 0 && sI > 0 && cI > 0 && dI > 0) {  // ハート以外が残ってる場合

    // 伏せられたカードを山札から除外する
    suit = Math.floor(Math.random() * 3);// 場にあるトランプのカードの柄の設定

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
      sGara = 'c';
      trump_n = Math.floor(Math.random() * cI);
      cI = cI - 1;
      nCard = cTrump[trump_n]
      for (let item of cTrump) {
        if (item === nCard) {
          cTrump.splice(trump_n, 1);
        }
      }
    } else if (suit === 2) {
      sGara = 'd';
      trump_n = Math.floor(Math.random() * dI);
      dI = dI - 1;
      nCard = dTrump[trump_n]
      for (let item of dTrump) {
        if (item === nCard) {
          dTrump.splice(trump_n, 1);

        }
      }
    }
  } else if (cI === 0 && sI > 0 && hI > 0 && dI > 0) {  // クラブ以外が残ってる場合

    // 伏せられたカードを山札から除外する
    suit = Math.floor(Math.random() * 3);// 場にあるトランプのカードの柄の設定

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
    } else if (suit === 2) {
      sGara = 'd';
      trump_n = Math.floor(Math.random() * dI);
      dI = dI - 1;
      nCard = dTrump[trump_n]
      for (let item of dTrump) {
        if (item === nCard) {
          dTrump.splice(trump_n, 1);

        }
      }
    }
  } else if (dI === 0 && sI > 0 && hI > 0 && cI > 0) {  // ダイヤ以外が残ってる場合

    // 伏せられたカードを山札から除外する
    suit = Math.floor(Math.random() * 3);// 場にあるトランプのカードの柄の設定

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
    } else if (suit === 2) {
      sGara = 'c';
      trump_n = Math.floor(Math.random() * cI);
      cI = cI - 1;
      nCard = cTrump[trump_n]
      for (let item of cTrump) {
        if (item === nCard) {
          cTrump.splice(trump_n, 1);
        }
      }
    }
  } else if (sI === 0 && hI === 0 && cI > 0 && dI > 0) {  //スペードとハートが無くなった場合
    // 伏せられたカードを山札から除外する
    suit = Math.floor(Math.random() * 2);// 場にあるトランプのカードの柄の設定

    if (suit === 0) {
      sGara = 'c';
      trump_n = Math.floor(Math.random() * cI);
      cI = cI - 1;
      nCard = cTrump[trump_n]
      for (let item of cTrump) {
        if (item === nCard) {
          cTrump.splice(trump_n, 1);
        }
      }
    } else if (suit === 1) {
      sGara = 'd';
      trump_n = Math.floor(Math.random() * dI);
      dI = dI - 1;
      nCard = dTrump[trump_n]
      for (let item of dTrump) {
        if (item === nCard) {
          dTrump.splice(trump_n, 1);
        }
      }
    }
  } else if (sI === 0 && cI === 0 && hI > 0 && dI > 0) {  //スペードとクラブが無くなった場合
    // 伏せられたカードを山札から除外する
    suit = Math.floor(Math.random() * 2);// 場にあるトランプのカードの柄の設定

    if (suit === 0) {
      sGara = 'h';
      trump_n = Math.floor(Math.random() * hI);
      hI = hI - 1;
      nCard = hTrump[trump_n]
      for (let item of cTrump) {
        if (item === nCard) {
          hTrump.splice(trump_n, 1);
        }
      }
    } else if (suit === 1) {
      sGara = 'd';
      trump_n = Math.floor(Math.random() * dI);
      dI = dI - 1;
      nCard = dTrump[trump_n]
      for (let item of dTrump) {
        if (item === nCard) {
          dTrump.splice(trump_n, 1);
        }
      }
    }
  } else if (sI === 0 && dI === 0 && hI > 0 && cI > 0) {  //スペードとダイヤが無くなった場合
    // 伏せられたカードを山札から除外する
    suit = Math.floor(Math.random() * 2);// 場にあるトランプのカードの柄の設定

    if (suit === 0) {
      sGara = 'h';
      trump_n = Math.floor(Math.random() * hI);
      hI = hI - 1;
      nCard = hTrump[trump_n]
      for (let item of cTrump) {
        if (item === nCard) {
          hTrump.splice(trump_n, 1);
        }
      }
    } else if (suit === 1) {
      sGara = 'c';
      trump_n = Math.floor(Math.random() * cI);
      cI = cI - 1;
      nCard = cTrump[trump_n]
      for (let item of cTrump) {
        if (item === nCard) {
          cTrump.splice(trump_n, 1);
        }
      }
    }
  } else if (hI === 0 && cI === 0 && sI > 0 && dI > 0) {  //ハートとクラブが無くなった場合
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
      sGara = 'd';
      trump_n = Math.floor(Math.random() * dI);
      dI = dI - 1;
      nCard = dTrump[trump_n]
      for (let item of dTrump) {
        if (item === nCard) {
          dTrump.splice(trump_n, 1);
        }
      }
    }
  } else if (hI === 0 && dI === 0 && sI > 0 && cI > 0) {  //ハートとダイヤが無くなった場合
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
      sGara = 'c';
      trump_n = Math.floor(Math.random() * cI);
      cI = cI - 1;
      nCard = cTrump[trump_n]
      for (let item of cTrump) {
        if (item === nCard) {
          cTrump.splice(trump_n, 1);
        }
      }
    }
  } else if (cI === 0 && dI === 0 && sI > 0 && hI > 0) {  //クラブとダイヤが無くなった場合
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
  } else if (hI === 0 && cI === 0 && dI === 0 && sI > 0) {  //スペードのみが残った場合
    // 伏せられたカードを山札から除外する
    sGara = 's';
    trump_n = Math.floor(Math.random() * sI);
    sI = sI - 1;
    nCard = sTrump[trump_n]
    for (let item of sTrump) {
      if (item === nCard) {
        sTrump.splice(trump_n, 1);
      }
    }
  } else if (sI === 0 && cI === 0 && dI === 0 && hI > 0) {  //ハートのみが残った場合
    // 伏せられたカードを山札から除外する
    sGara = 'h';
    trump_n = Math.floor(Math.random() * hI);
    hI = hI - 1;
    nCard = hTrump[trump_n]
    for (let item of hTrump) {
      if (item === nCard) {
        hTrump.splice(trump_n, 1);
      }
    }
  } else if (sI === 0 && hI === 0 && dI === 0 && cI > 0) {  //クラブのみが残った場合
    // 伏せられたカードを山札から除外する
    sGara = 'c';
    trump_n = Math.floor(Math.random() * cI);
    cI = cI - 1;
    nCard = cTrump[trump_n]
    for (let item of cTrump) {
      if (item === nCard) {
        cTrump.splice(trump_n, 1);
      }
    }
  } else if (sI === 0 && hI === 0 && cI === 0 && dI > 0) {  //ダイヤのみが残った場合
    // 伏せられたカードを山札から除外する
    sGara = 'd';
    trump_n = Math.floor(Math.random() * dI);
    dI = dI - 1;
    nCard = dTrump[trump_n]
    for (let item of dTrump) {
      if (item === nCard) {
        dTrump.splice(trump_n, 1);
      }
    }
  }

  document.getElementById('cia').src = 'trump/' + sGara + '_' + nCard + '.png';

  /* 追加した判定のプログラム */
  if (card < nCard) {//賭けカードが、伏せカードより大きい場合
    if (Hi_L === 0) {
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
      loseCnt = loseCnt + 1;
    }
  }

  else if (card === nCard) { Result = "引き分け！！"; }//同じ数字が出た場合

  card = nCard;//場にあるカードを新しく引いたカードに変える
  tCard = card;//場にあるカードを新しく引いたカードの画像に変える為の変数に入れる

  // 結果
  if (loseCnt > 0) {
    document.getElementById("After").textContent = "";
    document.getElementById("Before").textContent = "";
    document.getElementById('rireki').textContent = "";
    document.getElementById('button').textContent = "";
    document.getElementById('syuryo').textContent = "ゲーム終了！";
    $('#lose').removeClass('lose');
    $('#top').removeClass('top');
    $('#rensyou').text('記録は【' + winCnt + '連勝】');
  } else if (loseCnt === 0) {
    document.getElementById("After").innerHTML = "伏せカードは" + nCard + Result + "<br>次のカードが今の数字より高いか低いか考えてみよう！";
    document.getElementById("Before").innerHTML = "場にあるカードは" + card;
    document.getElementById('rireki').textContent = "只今" + winCnt + '連勝中！';
  }

  if(sI + hI + cI + dI > 0 && loseCnt === 0) {
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

}
