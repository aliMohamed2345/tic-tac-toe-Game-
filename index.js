const uls = document.querySelectorAll(`.square .item`);
let player1 = true;
let player2 = false;
let rounds = 0;
const winningPossibility = [
  [0, 1, 2], //rows opportunities
  [3, 4, 5], //rows opportunities
  [6, 7, 8], //rows opportunities
  [0, 3, 6], //columns opportunities
  [1, 4, 7], //columns opportunities
  [2, 5, 8], //columns opportunities
  [0, 4, 8], //diagonals opportunities
  [2, 4, 6], //diagonals opportunities
];
function ifDraw(round, elements) {
  if (round === elements.length) {
    document.querySelector(`.overlay`).style.display = "block";
    document.querySelector(`.draw-Massage`).style.display = "block";
    document
      .querySelector(`.draw-Massage button`)
      .addEventListener(`click`, (e) => {
        e.currentTarget = location.reload();
      });
  }
}
function CheckingTheWinner(elements) {
  for (let i of winningPossibility) {
    const [a, b, c] = i;
    if (
      elements[a].innerHTML &&
      elements[a].innerHTML === elements[b].innerHTML &&
      elements[a].innerHTML === elements[c].innerHTML
    ) {
      document.querySelector(`.overlay`).style.display = "block";
      document.querySelector(`.win-Massage`).style.display = `block`;
      document.querySelector(`.win-Massage p span`).innerHTML = player1
        ? `2`
        : `1`;
      document
        .querySelector(`.win-Massage button`)
        .addEventListener(`click`, (e) => {
          e.currentTarget = location.reload();
        });
    }
    ifDraw(rounds, elements);
  }
}

uls.forEach((li) => {
  li.addEventListener(`click`, () => {
    if (!li.innerHTML) {
      if (player1 === true && player2 === false) {
        li.innerHTML = `X`;
        player1 = false;
        player2 = true;
        rounds++;
      } else {
        li.innerHTML = `O`;
        player1 = true;
        player2 = false;
        rounds++;
      }
    }
    CheckingTheWinner(uls);
  });
});
