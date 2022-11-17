/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  console.log(matrix);
  let res = [],
    left = 0,
    right = matrix[0].length,
    top = 0;
  bottom = matrix.length;
  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      //   console.log("for 1", matrix[top][i]);
      res.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i < bottom; i++) {
      //   console.log(matrix[i][right - 1]);
      res.push(matrix[i][right - 1]);
    }
    right--;

    // if (!(left < right && top < bottom)) break;

    for (let i = right - 1; i > left - 1; i--) {
      //   console.log(matrix[bottom - 1][i]);
      res.push(matrix[bottom - 1][i]);
    }
    bottom--;

    for (let i = bottom - 1; i > top - 1; i--) {
      //   console.log(matrix[i][left]);
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
};
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralOrder(matrix));
//[1,2,3,6,9,8,7,4,5]
