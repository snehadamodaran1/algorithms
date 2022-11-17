// var maxSumSubmatrix = function (matrix, k) {
//   if (matrix.length == 0) {
//     return 0;
//   }

//   var binarySearch = function (arr, target) {
//     var l = 0,
//       h = arr.length - 1;
//     while (l <= h) {
//       var m = Math.floor((l + h) / 2);
//       if (arr[m] == target) {
//         return m;
//       } else if (arr[m] < target) {
//         l = m + 1;
//       } else {
//         h = m - 1;
//       }
//     }
//     return l;
//   };

//   var insert = function (arr, target) {
//     var index = binarySearch(arr, target);
//     if (arr[index] != target) {
//       arr.splice(index, 0, target);
//     }
//   };

//   var lowerBound = function (arr, target) {
//     return arr[binarySearch(arr, target)];
//   };

//   var row = matrix.length;
//   var col = matrix[0].length;
//   var baseRow = true;
//   if (row < col) {
//     baseRow = false;
//     var temp = row;
//     row = col;
//     col = temp;
//   }
//   var res = Number.MIN_SAFE_INTEGER;
//   for (var i = 0; i < col; i++) {
//     var sums = [];
//     for (var c = i; c < col; c++) {
//       var max = Number.MIN_SAFE_INTEGER;
//       for (var r = 0; r < row; r++) {
//         var elem = baseRow ? matrix[r][c] : matrix[c][r];
//         sums[r] = sums[r] == undefined ? elem : sums[r] + elem;
//       }

//       var arr = [0];
//       var accSum = 0;
//       for (var idx = 0; idx < sums.length; idx++) {
//         var sum = sums[idx];
//         accSum += sum;
//         var s = lowerBound(arr, accSum - k);
//         if (s != undefined) {
//           max = Math.max(max, accSum - s);
//         }
//         insert(arr, accSum);
//       }

//       res = Math.max(res, max);
//     }
//   }

//   return res;
// };

//Kadanes algorithm

var maxSumSubmatrix = function (m, k) {
  let mt = 0,
    mb = 0,
    ml = 0,
    mr = 0,
    max = -Infinity;

  let rows = m.length,
    cols = m[0].length;

  let sums = Array(rows);

  for (let l = 0; l < cols; l++) {
    sums.fill(0);

    for (let r = l; l < cols; r++) {
      if (r >= cols) break;

      for (let row = 0; row < rows; row++) {
        sums[row] += m[row][r];
      }

      for (let i = 0; i < rows; i++) {
        let sum = 0;
        for (let j = i; j < rows; j++) {
          sum += sums[j];
          if (sum > max && sum <= k) {
            mt = i;
            mb = j;
            ml = l;
            mr = r;
            max = sum;
          }
        }
      }
    }
  }

  return max;
};
