var containsDuplicate = function (nums) {
  var hashMap = {};
  for (i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      return true;
    } else {
      hashMap[nums[i]] = true;
    }
  }
  return false;
};

var nums = [1, 2, 5, 8, 4, 6, 5];
var isDuplicate = containsDuplicate(nums);
console.log(isDuplicate);
