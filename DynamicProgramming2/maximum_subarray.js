// var subarray = (a) => {
//   let n = a.length;
//   let dp = Array(n).fill(0);
//   dp[0] = a[0];
//   for (let i = 1; i < n; i++) {
//     if (dp[i - 1] < 0) {
//       dp[i] = a[i]; //when sum goes below 0, drop previous and new subarray sum start from a[i]
//     } else {
//       dp[i] = dp[i - 1] + a[i];
//     }
//   }
//   console.log(dp);
//   return Math.max(...dp);
// };

var subarray = (a) => {
  let sum = 0,
    maxSum = -Infinity;
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
    if (sum < 0) sum = 0;
    if (sum > maxSum) maxSum = sum;
  }
  return maxSum;
};
// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let nums = [-4, 2, -5, 1, 2, 3, 6, -5, 1];
console.log(subarray(nums));
