// var integerReplacement = function (n) {
//   let dp = [];

//   return checksequence(n);

//   function checksequence(n) {
//     if (n == 1) {
//       return 0;
//     }

//     if (dp[n]) {
//       return dp[n];
//     }

//     if (n % 2 == 0) {
//       dp[n] = checksequence(n / 2) + 1;
//     } else {
//       let a = checksequence(n - 1) + 1;
//       let b = checksequence((n + 1) / 2) + 2;
//       console.log(a, b);

//       dp[n] = Math.min(a, b);
//     }
//     // console.log("dp[n]", dp[n]);
//     return dp[n];
//   }
// };

var integerReplacement = function (n) {
  return helper(n, {});
};

function helper(n, cache) {
  if (n === 1) return 0;
  if (cache[n] !== undefined) return cache[n];

  let result = 0;
  if (n % 2 === 0) {
    result += 1 + helper(n / 2, cache);
  } else {
    result += 1 + Math.min(helper(n - 1, cache), helper(n + 1, cache));
  }

  return (cache[n] = result);
}

integerReplacement(7);
