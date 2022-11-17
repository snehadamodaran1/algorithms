// Time complexity: O(n^2 log m)
// n = number of rows/cols
// m = number of integers between the smallest and larget numbers

var kthSmallest = function (matrix, k) {
  const n = matrix.length;

  function getCount(target) {
    let count = 0;

    for (let i = 0; i < n; i++) {
      let currCount = 0;

      for (let j = 0; j < n; j++) {
        if (matrix[i][j] <= target) currCount++;
        else break;
      }
      count += currCount;
      if (!currCount) break;
    }
    return count;
  }

  let start = matrix[0][0],
    end = matrix[n - 1][n - 1];

  while (start < end) {
    const mid = Math.floor((end - start) / 2) + start;
    const count = getCount(mid);
    if (count < k) start = mid + 1;
    else end = mid;
  }
  return end;
};
matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
];
console.log(matrix.flat());
