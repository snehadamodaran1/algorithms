var subarray = (a) => {
  let n = a.length;
  let dp = Array(n).fill(0);
  dp[0] = a[0];
  for (let i = 1; i < n; i++) {
    if (dp[i - 1] < 0) {
      dp[i] = a[i]; //when sum goes below 0, drop previous and new subarray sum start from a[i]
    } else {
      dp[i] = dp[i - 1] + a[i];
    }
  }
  console.log(dp);
  return Math.max(...dp);
};
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(subarray(nums));
