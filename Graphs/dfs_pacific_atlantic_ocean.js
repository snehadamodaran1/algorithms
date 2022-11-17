var pacificAtlantic = function (heights) {
  const result = [];
  const pac = new Set();
  const atl = new Set();
  const LAST_ROW = heights.length - 1;
  const LAST_COL = heights[0].length - 1;

  const dfs = (i, j, visited, prevHeight) => {
    //add visisted.has(grid) to condition
    //heights must be increasing or equal to continue dfs
    if (
      i < 0 ||
      i > LAST_ROW ||
      j < 0 ||
      j > LAST_COL ||
      heights[i][j] < prevHeight ||
      visited.has(`${i} ${j}`)
    ) {
      return;
    }

    visited.add(`${i} ${j}`); // if not visisted add else return up ^

    dfs(i + 1, j, visited, heights[i][j]);
    dfs(i - 1, j, visited, heights[i][j]);
    dfs(i, j + 1, visited, heights[i][j]);
    dfs(i, j - 1, visited, heights[i][j]);
  };

  for (let i = 0; i <= LAST_COL; i++) {
    dfs(0, i, pac, heights[0][i]);
    dfs(LAST_ROW, i, atl, heights[LAST_ROW][i]);
  }

  for (let i = 0; i <= LAST_ROW; i++) {
    dfs(i, 0, pac, heights[i][0]);
    dfs(i, LAST_COL, atl, heights[i][LAST_COL]);
  }

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
      if (atl.has(`${i} ${j}`) && pac.has(`${i} ${j}`)) {
        result.push([i, j]);
      }
    }
  }

  return result;
};
