// We are looping through the array and for avaiable elements, we caclulate the index and make those items negative.
// The indexes range from 1 to length of input.
// Then we search the entire array again to find items which are still positive.
// These are the items which were missing in the input array.

var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
