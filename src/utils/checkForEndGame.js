const winningMoves = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [1, 5, 9],
];

export const checkEndGame = (allMoves) => {
  let xMoves = [];
  let oMoves = [];
  allMoves.map((move) => {
    if (move.symbol === 'X') {
      xMoves = [...xMoves, move.position];
    }
  });
  if (checkWin(xMoves)) return 'X Wins!';

  allMoves.map((move) => {
    if (move.symbol === 'O') {
      oMoves = [...oMoves, move.position];
    }
  });
  if (checkWin(oMoves)) return 'O Wins!';

  if (xMoves.length + oMoves.length >= 9) return 'Tie';
};

const checkWin = (moves) => {
  for (let i = 0; i < winningMoves.length; i++) {
    let count = 0;
    for (let j = 0; j < moves.length; j++) {
      if (winningMoves[i].includes(moves[j])) {
        count++;
      }
      if (count >= 3) return true;
    }
  }

  return false;
};
