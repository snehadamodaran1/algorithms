// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// var two_sum = function (nums, target) {
//   var hashmap = {};
//   for (var i = 0; i < nums.length; i++) {
//     let rem = target - nums[i];
//     if (hashmap[rem] != undefined) {
//       return [hashmap[target - nums[i]], i];
//     }
//     hashmap[nums[i]] = i;
//   }
//   return false;
// };

function two_sum(items, target) {
  let map = {};
  for (let i = 0; i < items.length; i++) {
    if (map[target - items[i]]) return [i, map[target - items[i]]];
    if (!map[items[i]]) map[items[i]] = i;
  }
  return [-1, -1];
}

var nums = [2, 7, 11, 15],
  target = 22;
var isDuplicate = two_sum(nums, target);
console.log(isDuplicate);
