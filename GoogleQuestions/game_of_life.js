/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const rlen = board.length;
  const clen = board[0].length;

  // deep copy of the board
  const copy = [];
  for (let r = 0; r < rlen; r++) {
    copy[r] = [...board[r]];
  }

  for (let r = 0; r < rlen; r++) {
    for (let c = 0; c < clen; c++) {
      let liveNeighbors = 0;
      let deadNeighbors = 0;

      // count live / dead neighbors
      // rows: [r-1, r+1], columns: [c-1, c+1]
      for (let r1 = Math.max(r - 1, 0); r1 <= Math.min(r + 1, rlen - 1); r1++) {
        for (
          let c1 = Math.max(c - 1, 0);
          c1 <= Math.min(c + 1, clen - 1);
          c1++
        ) {
          // exclude the current cell
          if (c1 === c && r1 === r) continue;
          if (copy[r1][c1] === 1) {
            liveNeighbors++;
          } else {
            deadNeighbors++;
          }
        }
      }

      // follow the rules of the game
      if (copy[r][c] === 1) {
        board[r][c] = liveNeighbors === 2 || liveNeighbors === 3 ? 1 : 0;
      } else {
        board[r][c] = liveNeighbors === 3 ? 1 : 0;
      }
    }
  }
};
