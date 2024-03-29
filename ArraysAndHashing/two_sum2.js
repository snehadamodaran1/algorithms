/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    if (sum < target) {
      left++;
    }
    if (sum > target) {
      right--;
    }
  }
};
let numbers = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(numbers, target));
