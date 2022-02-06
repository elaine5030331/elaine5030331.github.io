let ans = [];
let player_guess = [];
let minutes = 00;
let seconds = 00;
let tens = 00;
let interval;

//開始遊戲V
const get_start_btn = document.querySelector('#get-start-btn');

//放棄遊戲(顯示答案)V
const give_up_btn = document.querySelector('#give-up-btn');

//重新開始
const restart_btn = document.querySelector('#restart-btn');

//時間計時 分
let appendMinutes = document.querySelector('#minutes');

//時間計時 分
let appendSeconds = document.querySelector('#seconds');

//時間計時 分
let appendTens = document.querySelector('#tens');

//歷史紀錄
const game_history = document.querySelector('.game-history');

//數字按鈕
const number_btn = document.querySelectorAll('.number-btn');

//清除按鈕
const clear_btn = document.querySelector('#clear-btn');

//猜按鈕
const guess_btn = document.querySelector('#guess-btn');

//玩家輸入
const player_input = document.querySelector('.player-input');

window.onload = function () {
  //開始遊戲
  get_start_btn.addEventListener('click', function () {
    ans = getAns();
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    // console.log(ans);
  });

  //放棄遊戲
  give_up_btn.addEventListener('click', function () {
    clearInterval(interval);
    alert(
      `既然你誠心誠意的放棄了，那我就大發慈悲告訴你答案吧，答案是: ${ans.join(
        ''
      )}`
    );
  });

  //清除按鈕
  clear_btn.addEventListener('click', function () {
    player_input.value = '';
  });

  //數字按鈕
  number_btn.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener('click', function (event) {
      player_input.value += btn.value;
    });
  });

  //猜按鈕
  guess_btn.addEventListener('click', function () {
    guessAnswer();
    player_guess.value = '';
  });

  //重新開始按鈕
  restart_btn.addEventListener('click', function () {
    resetGame();
    requestTime();
  });
};

function getAns() {
  let answer = [];
  while (answer.length != 4) {
    let randomNum = Math.floor(Math.random() * 10);
    if (!answer.includes(randomNum)) {
      answer.push(randomNum);
    }
  }
  return answer;
}

function guessAnswer() {
  if (player_input.value.length == 4) {
    player_guess = player_input.value.split('').map((x) => parseInt(x));
    let intersect = player_guess.filter((x) => ans.indexOf(x) != -1);
    //   console.log(intersect);
    let a = intersect.filter(
      (x) => ans.indexOf(x) == player_guess.indexOf(x)
    ).length;
    let b = intersect.length - a;

    game_history.innerHTML += `<p> ${a}A${b}B ${player_guess.join('')} </p>`;
  } else {
    alert('請輸入四位整數');
  }
}

function startTimer() {
  tens++;

  if (tens <= 9) {
    appendTens.innerHTML = '0' + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    console.log('seconds');
    seconds++;
    appendSeconds.innerHTML = '0' + seconds;
    tens = 0;
    appendTens.innerHTML = '0' + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }

  if (seconds >= 60) {
    console.log('minutes');
    minutes++;
    appendMinutes.innerHTML = '0' + minutes;
    seconds = 0;
    appendSeconds.innerHTML = '0' + 0;
  }
}

function resetGame() {
  game_history.innerHTML = '歷程記錄';
}

function resetTime() {}
