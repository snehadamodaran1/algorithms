// var searchMatrix = function (matrix, target) {
//   let col,
//     rowLen = matrix[0].length - 1;

//   for (let i = 0; i < matrix.length; i++) {
//     if (target >= matrix[0][i]) {
//       col = i;
//       break;
//     }
//   }
//   console.log(col);
//   let l = 0,
//     r = rowLen;

//   while (l <= r) {
//     let mid = Math.floor((l + r) / 2);
//     if (matrix[col][mid] == target) return true;
//     else if (target > matrix[col][mid]) l = mid + 1;
//     else r = mid - 1;
//   }
//   return false;
// };
let matrix = [[1]],
  target = 1;

// console.log(matrix[2][3]);
console.log(searchMatrix(matrix, target));

var searchMatrix = function (matrix, target) {
  for (let i of matrix) {
    if (i[0] <= target && i[i.length - 1] >= target) {
      let s = 0;
      let e = i.length - 1;
      while (s <= e) {
        let mid = Math.floor((s + e) / 2);
        if (i[mid] === target) {
          return true;
        } else if (i[mid] < target) {
          s = mid + 1;
        } else if (i[mid] > target) {
          e = mid - 1;
        }
      }
      return false;
    }
  }
  return false;
};
