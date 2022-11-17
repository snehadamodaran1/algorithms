function fill(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        dfs(matrix, i, j, 0);
      }
    }
  }
}
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
function dfs(matrix, row, col, currentStep) {
  if (
    row < 0 ||
    row >= matrix.length ||
    col < 0 ||
    col >= matrix[0].length ||
    currentStep > matrix[row][col]
  ) {
    return;
  }

  matrix[row][col] = currentStep;
  // console.log(matrix, row, col, currentStep)
  for (let i = 0; i < direction.length; i++) {
    dfs(matrix, row + direction[i][0], col + direction[i][1], currentStep + 1);
  }
}
