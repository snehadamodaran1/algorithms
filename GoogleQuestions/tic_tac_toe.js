// list all 8 winning cases
// traversal the moves array to get A's moves and B's moves
// If A's moves or B's moves contains all moves from one of the winning cases, then A or B wins respectively
// If no one won and total moves is less than 9, the game is still on going. Return 'Pending'
// Else, return 'Draw'
let tictactoe = function (moves) {
  let winList = [
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];
  let aSteps = [],
    bSteps = [];
  for (let i = 0; i < moves.length; i++) {
    if (i % 2) {
      bSteps.push(moves[i]);
    } else {
      aSteps.push(moves[i]);
    }
  }
  for (let i = 0; i < winList.length; i++) {
    if (winList[i].every((r) => ifArrayInArray(aSteps, r))) {
      return "A";
    }
    if (winList[i].every((r) => ifArrayInArray(bSteps, r))) {
      return "B";
    }
  }

  if (moves.length < 9) {
    return "Pending";
  } else {
    return "Draw";
  }

  function ifArrayInArray(wholeArray, partArray) {
    for (let i = 0; i < wholeArray.length; i++) {
      if (
        wholeArray[i][0] == partArray[0] &&
        wholeArray[i][1] == partArray[1]
      ) {
        return true;
      }
    }
    return false;
  }
};
