var updateMatrix = function (mat) {
  let queue = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = -1;
      }
    }
  }
  console.log(mat);
  let dir = [
    [0, 1],
    [-1, 0],
    [1, 0],
    [0, -1],
  ];
  let level = 0;
  while (queue.length !== 0) {
    let size = queue.length;
    level++;
    while (size--) {
      let cell = queue.shift();
      for (let i = 0; i < 4; i++) {
        let r = cell[0] + dir[i][0];
        let c = cell[1] + dir[i][1];
        if (
          r < 0 ||
          c < 0 ||
          r >= mat.length ||
          c >= mat[0].length ||
          mat[r][c] !== -1
        )
          continue;
        console.log(level);
        mat[r][c] = level;
        queue.push([r, c]);
      }
    }
  }
  return mat;
};

let mat = [[0], [0], [0], [0], [0]];
console.log(updateMatrix(mat));
