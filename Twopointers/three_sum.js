// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:
// Input: nums = []
// Output: []

// Example 3:
// Input: nums = [0]
// Output: []

var threeSum = function (nums) {
  const res = [];
  if (nums.length < 3) return res; // return res - not false
  nums = nums.sort((a, b) => a - b);
  console.log(nums);
  let target = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue; //this line prevents duplicates
    j = i + 1;
    k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === target) {
        res.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else if (sum < target) j++;
      else k--;
    }
  }
  return res;
};

var nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
console.log(threeSum(nums));
