// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Example 1:

// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.

var islandPerimeter = function (grid) {
  let height = grid.length;
  let width = grid[0].length;

  let count = 0;

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (grid[row][col] == 1) {
        count += 4;

        if (row > 0 && grid[row - 1][col] == 1) count--;
        if (row < height - 1 && grid[row + 1][col] == 1) count--;
        if (grid[row][col - 1] == 1) count--;
        if (grid[row][col + 1] == 1) count--;
      }
    }
  }
  return count;
};
