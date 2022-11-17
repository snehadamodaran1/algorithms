// var numOfIslands = function (grid) {
//   let count = 0;
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] == "1") {
//         count++;
//         bfs(grid, i, j);
//       }
//     }
//   }
//   return count;
// };

// var bfs = function (grid, i, j) {
//   var queue = [[i, j]];
//   while (queue.length) {
//     let [x, y] = queue.pop(); // check if it runs with shft also
//     grid[x][y] = 0;
//     for (let [newX, newY] of [
//       [x - 1, y],
//       [x + 1, y],
//       [x, y - 1],
//       [x, y + 1],
//     ]) {
//       if (
//         newX >= 0 &&
//         newX < grid.length &&
//         newY >= 0 &&
//         newY < grid[0].length &&
//         grid[newX][newY] === "1"
//       ) {
//         queue.push([newX, newY]);
//       }
//     }
//   }
// };

// Find the first 1 usinf 2 for loops and find the remaning 1s around it using bfs
// In bfs use a queue and pop - use a var x,y anf check all 4 sides if yes =1 then push it into queue
var numOfIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == "1") {
        count++;
        bfs(grid, i, j);
      }
    }
  }
  return count;
};

var bfs = function (grid, i, j) {
  var queue = [[i, j]];
  while (queue.length) {
    let [x, y] = queue.pop();
    grid[x][y] = 0; // dont forget
    for (let [newX, newY] of [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ]) {
      if (
        newX >= 0 &&
        newX < grid.length &&
        newY >= 0 &&
        newY < grid[0].length &&
        grid[newX][newY] == "1"
      ) {
        queue.push([newX, newY]);
      }
    }
  }
};
let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
console.log(numOfIslands(grid));
