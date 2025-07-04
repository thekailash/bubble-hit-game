let hit = document.querySelector("#hit");
let timer = document.querySelector("#timer");
let score = document.querySelector("#score");
let bubbleGrid = document.querySelector("#bubble-grid");
let timerValue = 30;
let scoreValue = 0;
let hitrn = 0;
let startGame = document.querySelector("#startGame");

function bubbleCreate() {
  let clutter = "";
  if(window.innerWidth >= 768){
  for (let i = 1; i <= 84; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  bubbleGrid.innerHTML = clutter;
}
else{
  for (let i = 1; i <=54 ; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  bubbleGrid.innerHTML = clutter;
}
}

function timerFnc() {
  let timerInter = setInterval(function () {
    if (timerValue > 0) {
      timerValue--;
      timer.textContent = timerValue;
    } else {
      clearInterval(timerInter);
      bubbleGrid.innerHTML = `<div class="game-over">
                                <h2>Game Over</h2>
                                <button class="restart-btn" id="restart">Start Again</button>
                              </div>`;

      document.querySelector("#restart").addEventListener("click", () => {
        timerValue = 30;
        scoreValue = 0;
        score.textContent = scoreValue;
        timer.textContent = timerValue;
        bubbleCreate();
        timerFnc();
        hitFnc();
      });
    }
  }, 1000);
}

function hitFnc() {
  hitrn = Math.floor(Math.random() * 10);
  hit.textContent = hitrn;
}

function incScore() {
  scoreValue += 10;
  score.textContent = scoreValue;
}

function finalStep() {
  bubbleGrid.addEventListener("click", function (details) {
    let clickNo = Number(details.target.textContent);
    if (clickNo === hitrn) {
      incScore();
      bubbleCreate();
      hitFnc();
    }
  });
}

function gameStart(){
startGame.addEventListener("click", () => {
  bubbleCreate();
  timerFnc();
  hitFnc();
  finalStep();
});
}

gameStart();
