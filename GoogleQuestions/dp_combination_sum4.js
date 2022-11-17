// var combinationSum4 = function (nums, target) {
//   let arr = Array(target + 1);
//   arr[0] = 0;
//   for (let i = 1; i < arr.length; i++) {
//     arr[i] = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (i == nums[j]) {
//         arr[i]++;
//       }
//       if (arr[i - nums[j]]) {
//         arr[i] += arr[i - nums[j]];
//       }
//     }
//   }
//   console.log(arr);
//   return arr[target];
// };
var combinationSum4 = function (nums, target) {
  const dp = Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; ++i) {
    for (const n of nums) {
      // console.log(i, i - n, i - n >= 0);
      if (i - n >= 0) {
        dp[i] += dp[i - n];
      }
    }
  }
  console.log(dp);
  return dp[target];
};
var nums = [1, 2, 3],
  target = 4;
combinationSum4(nums, target);
