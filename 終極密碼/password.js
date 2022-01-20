window.alert('點擊「我猜！我猜！我猜猜猜」的按鈕後即開始遊戲');

let playerInput = document.querySelector('.player-input');
let numberBtn = document.querySelectorAll('.number-btn');
let playerAnsShowBox = document.querySelector('.player-ans-showBox');

//抓取每個數字 btn → 迭代
//按到哪個數字按鈕，其值會逐一加到玩家猜的 input
numberBtn.forEach((btn) => {
  btn.addEventListener('click', function (event) {
    playerInput.value += btn.value;
  });
});

// clear btn
let clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', function () {
  playerInput.value = '';
});

// comfirm btn
let comfirmBtn = document.querySelector('#comfirm-btn');
comfirmBtn.addEventListener('click', function () {
  correctOrFault();
  playerInput.value = '';
});

//random num
let guessBtn = document.querySelector('#guess-btn');
let randomNum;
guessBtn.addEventListener('click', function () {
  randomNum = getRandom(0, 100);
  console.log(randomNum);
});

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//判斷輸入的數字是否符合規定
//判斷數字是否正確
let min = 0;
let max = 100;
function correctOrFault() {
  var t = typeof Number(playerInput.value);
  if (typeof Number(playerInput.value) != 'number') {
    alert('請輸入數字');
  } else {
    if (playerInput.value > min && playerInput.value < max) {
      if (playerInput.value != randomNum) {
        if (playerInput.value < randomNum) {
          playerAnsShowBox.innerText = `${playerInput.value} - ${max}`;
          min = playerInput.value;
        } else {
          playerAnsShowBox.innerText = `${min} - ${playerInput.value}`;
          max = playerInput.value;
        }
      } else {
        alert('恭喜答對');
      }
    } else {
      alert('請輸入範圍內的數字');
    }
  }
}

function numComfirm() {}
