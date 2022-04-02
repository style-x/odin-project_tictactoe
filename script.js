
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
  msg1.innerHTML = `Turn: <span id="upc">${pt}</span>`;
};

function gameover() {
  if (checkWin(pt)) {
    msg2.innerHTML = `<span id="upc">${pt}</span> wins!`;
    msg[0].classList.add('show');
    console.log(pt, "wins!");
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
  console.log("restart..");
  cell.forEach(el => {
    el.classList.remove('x');
    el.classList.remove('o');
  });
};