const numWays = function (n, k) {
  var dp, i;
  dp = [0, k, k * k, 0];
  if (n <= 2) {
    return dp[n];
  }
  if (k === 1) {
    return 0;
  }
  for (i = 2; i < n; i++) {
    dp[3] = (k - 1) * (dp[1] + dp[2]);
    dp[1] = dp[2];
    dp[2] = dp[3]; // shift forward
  }
  return dp[3];
};

// var numWays = function (n, k) {
//   if (n == 0) return 0;
//   if (n == 1) return k;
//   let same = k;
//   let diff = k * (k - 1);
//   for (let i = 3; i <= n; i++) {
//     let same1 = diff;
//     let diff1 = (same + diff) * (k - 1);
//     same = same1;
//     diff = diff1;
//   }
//   return same + diff;
// };

console.log(numWays(3, 2));
