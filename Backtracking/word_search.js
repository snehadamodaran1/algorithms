// var exist = function (board, word) {
//   let dfs = (board, i, j, word, count = 0) => {
//     if (count === word.length) return true;
//     if (
//       i < 0 ||
//       i >= board.length ||
//       j < 0 ||
//       j >= board[0].length ||
//       board[i][j] !== word[count]
//     )
//       return false;
//     let temp = board[i][j];
//     board[i][j] = "";
//     let found =
//       dfs(board, i - 1, j, word, count + 1) ||
//       dfs(board, i + 1, j, word, count + 1) ||
//       dfs(board, i, j - 1, word, count + 1) ||
//       dfs(board, i, j + 1, word, count + 1);
//     board[i][j] = temp;
//     return found;
//   };

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       if (board[i][j] === word[0] && dfs(board, i, j, word)) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

var exist = function (board, word) {
  var dfs = function (board, i, j, word, count = 0) {
    //keeping a count of matched letters
    if (count === word.length) return true;
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[0].length ||
      board[i][j] !== word[count]
    ) {
      // the cell we're on is not equal to the character we're looking for
      return false;
    }
    let temp = board[i][j];
    board[i][j] = ""; // preventing duplicates
    let found =
      dfs(board, i + 1, j, word, count + 1) ||
      dfs(board, i - 1, j, word, count + 1) ||
      dfs(board, i, j + 1, word, count + 1) ||
      dfs(board, i, j - 1, word, count + 1);
    board[i][j] = temp;
    return found;
  };
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0] && dfs(board, i, j, word)) {
        return true;
      } // looking for the forst letter in the 2d array word[0]
    }
  }
  return false;
};
