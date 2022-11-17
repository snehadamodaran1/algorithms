var search = function (nums, target) {
  if (!nums.length) return -1;
  var l = 0,
    r = nums.length - 1;
  while (l < r) {
    mid = Math.trunc((l + r) / 2);
    if (nums[mid] === target) return mid;

    // left sorted portion
    if (nums[l] < nums[mid]) {
      if (nums[l] <= target && target <= nums[mid]) r = mid;
      else l = mid + 1;
    } // right sorted portion
    else {
      if (nums[mid + 1] <= target && target <= nums[r]) l = mid + 1;
      else r = mid;
    }
  }
  return nums[l] == target ? l : -1;
};

var nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
console.log(search(nums, target));
