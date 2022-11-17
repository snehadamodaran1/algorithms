var rotate = function (matrix) {
  l = 0;
  r = matrix.length - 1;
  while (l < r) {
    for (let i = 0; i < r - l; i++) {
      console.log(l, r, i);
      let top = l,
        bottom = r;
      // save the top left
      topLeft = matrix[top][l + i];

      // move bottom left in to top left
      matrix[top][l + i] = matrix[bottom - i][l];

      //bottom right into bottom left
      matrix[bottom - i][l] = matrix[bottom][r - i];

      //move top right into bottom right
      matrix[bottom][r - i] = matrix[top + i][r];

      //move top left into the top right
      matrix[top + i][r] = topLeft;
    }
    r = r - 1;
    l = l + 1;
  }
  return matrix;
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(rotate(matrix));
///----------------------------------------------------------------------------------------------------------------
var rotate = function (matrix) {
  const swap = function (or, oc, tr, tc) {
    [this[or][oc], this[tr][tc]] = [this[tr][tc], this[or][oc]];
  };
  let totalLevel = Math.floor(matrix.length / 2);
  let last = matrix.length - 1;
  let level = 0;
  while (level < totalLevel) {
    for (let i = level; i <= last - 1; i++) {
      swap.apply(matrix, [level, i, i, last]); // swap from left top to right top
      swap.apply(matrix, [level, i, last, last - i + level]);
      swap.apply(matrix, [level, i, last - i + level, level]);
    }
    ++level;
    --last;
  }
};
//https://www.youtube.com/watch?v=Jtu6dJ0Cb94
