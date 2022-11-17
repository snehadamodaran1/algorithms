var findMin = function (nums) {
  var l = 0,
    min = Number.POSITIVE_INFINITY;
  r = nums.length - 1;
  while (l <= r) {
    var mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[r]) l = mid + 1;
    else r = mid - 1;

    min = Math.min(nums[mid], min);
  }
  return min;
};
var nums = [4, 5, 6, 7, -1, 1, 2];
console.log(findMin(nums));
