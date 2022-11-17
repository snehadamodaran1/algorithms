// nums[0] <= nums[1] >= nums[2] <= nums[3]....
// go through array
// if even position swap if nums[i]>nums[i+1]
// if odd position swap if nums[i]<nums[i+1]

// var temp = nums[i];
// nums[i] = nums[i + 1];
// nums[i + 1] = temp;
var wiggleSort = function (nums) {
  // write your code here
  for (let i = 0; i < nums - 1; i++) {
    if (i % 2 == 0) {
      if (nums[i] > nums[i + 1]) {
        swapf(nums, i, i + 1);
      }
    } else {
      if (nums[i] < nums[i + 1]) {
        swapf(nums, i, i + 1);
      }
    }
  }
  var swapf = function (nums, a, b) {
    console.log("function called", nums);
    var temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  };
  console.log(nums);
};

var nums = [3, 5, 2, 1, 6, 4];
console.log(wiggleSort(nums));
