function numSquares(n) {
  const dp = [0];

  for (let i = 1; i <= n; i++) {
    dp[i] = Infinity;
    for (let j = 1; j * j <= i; j++) {
      // for every tagrget go through each square number
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  console.log(dp + ",");
  return dp[n];
}

// const numSquares = function (n) {
//   var i, j, res;
//   while (n % 4 === 0) {
//     n /= 4;
//   }
//   if (n % 8 === 7) {
//     return 4;
//   }
//   for (i = 0; i * i <= n; ++i) {
//     j = Math.floor(Math.sqrt(n * 1.0 - i * i));
//     if (i * i + j * j === n) {
//       res = 0;
//       if (i > 0) {
//         res += 1;
//       }
//       if (j > 0) {
//         res += 1;
//       }
//       return res;
//     }
//   }
//   return 3;
// };

console.log(numSquares(13));
