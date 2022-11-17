var uniquePaths = function (m, n) {
  const grid = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 1)
  );

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        grid[i][j] = 1;
      } else {
        grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
      }
    }
  }
  console.log(grid);
  return grid[m - 1][n - 1];
};
console.log(uniquePaths(3, 7));

// const grid = Array.from({ length: m }, () =>
//   Array.from({ length: n }, () => 0)
// );

// for (let i = 0; i < m; i++) {
//   for (let j = 0; j < n; j++) {
//     if (i === 0 || j === 0) {
//       grid[i][j] = 1;
//     } else {
//       grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
//     }
//   }
// }
// return grid[m - 1][n - 1];
