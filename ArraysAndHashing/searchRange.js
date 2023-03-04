/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(mid);
    if (nums[mid] == target) {
      left = mid;
      right = mid;
      while (nums[left - 1] === target) {
        left -= 1;
      }
      while (nums[right + 1] === target) {
        right += 1;
      }
      return [left, right];
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return [-1, -1];
};

let nums = [5, 7, 7, 8, 8, 10],
  target = 8;
console.log(searchRange(nums, target));
