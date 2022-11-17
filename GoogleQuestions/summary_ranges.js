var summaryRanges = function (nums) {
  let ans = [];
  let index = 0;
  let start;
  let finish;
  while (index < nums.length) {
    if (nums[index] === nums[index + 1] - 1) {
      start = nums[index];
      while (nums[index] === nums[index + 1] - 1) {
        finish = nums[index + 1];
        index++;
      }
      ans.push(`${start}->${finish}`);
    } else {
      ans.push(`${nums[index]}`);
    }
    index++;
  }
  return ans;
};
var nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums));
