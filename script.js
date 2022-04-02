
const cell = document.querySelectorAll('.cell');

let pt = "x";

cell.forEach(el => {
  el.addEventListener('click', player);
});

function player(e) {
  console.log(e);
  if ( this.classList.contains('x') || this.classList.contains('o') ) {
    return;
  } else {
    this.classList.add(pt);
    if (pt == "x") { pt = "o" };
    if (pt == "o") { pt = "x" };
    console.log(pt);
  }
};

function gameover() {
  console.log("Game Over");
};

function turn() {
  console.log("Turn: ");
};
