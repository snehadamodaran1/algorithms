// var rob = function (nums) {
//   let rob1 = 0,
//     rob2 = 0;
//   for (let n of nums) {
//     temp = Math.max(rob1 + n, rob2);
//     rob1 = rob2;
//     rob2 = temp;
//   }
//   return rob2;
// };

// nums = [2, 7, 9, 3, 1];
// // console.log(rob(nums));
// console.log(nums.slice(1));

function rob(nums) {
  if (!nums.length) return 0;
  if (nums.length <= 2) return Math.max(...nums);

  const dp = Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  return dp[nums.length - 1];
}
