const cell = document.querySelectorAll('.cell');
cell.forEach(el => {
  el.addEventListener('click', play);
});

const msg1 = document.getElementById("msg1");
const msg = document.getElementsByClassName("message");
const restartBtn = document.getElementById("restartBtn");
restartBtn.addEventListener('click', restart);

const WIN_COMB = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

var pt = "x";
var playerName = "Player 1";

function play(e) {
  if ( this.classList.contains('x') || this.classList.contains('o') ) {
    return;
  } else {
    this.classList.add(pt);
    gameover();
    if (pt === "x") { pt = "o" }
    else if (pt === "o") { pt = "x" };
    turn();
  }
};

function turn() {
  if (playerName === "Player 1") {
    msg1.innerHTML = `Turn: <span id="upc">${pt}</span>`;  
  } else if (pt === "x") {
    msg1.innerHTML = `Turn: ${playerName}`;
  } else {
    msg1.innerHTML = "Turn: Computer";
  }
};

function gameover() {
  if (checkWin(pt)) {
    if (playerName === "Player 1") {
      msg2.innerHTML = `<span id="upc">${pt}</span> wins!`;
    } else {
      msg2.innerHTML = `${playerName} wins!`;
    }
    msg[0].classList.add('show');
  }
};

function checkWin(pt) {
  return WIN_COMB.some(comb => {
    return comb.every(index => {
      return cell[index].classList.contains(pt);
    }) 
  })
};

function restart() {
  msg[0].classList.remove('show');
  cell.forEach(el => {
    el.classList.remove('x');
    el.classList.remove('o');
  });
};

function getPlayerName() {
  if (playerName === "Player 1") {
    playerName = prompt("What's your Name?");
  }
  turn();
};

getPlayerName();