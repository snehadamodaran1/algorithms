function findMissingRanges(nums, lower, upper) {
  // array to add ranges
  const result = [];
  // start at lower - 1 for edge case where lower === nums[0]
  let prev = lower - 1;
  // loop for nums.length times so we can compare the last value with upper
  for (let i = 0; i <= nums.length; i++) {
    // current number to compare to prev
    // when i === nums.length we will compare prev = nums[nums.length-1] and upper
    // the upper+1 is to account for nums[nums.length-1]===upper
    let curr = i < nums.length ? nums[i] : upper + 1;
    // check if we need to add a range to the array
    if (prev + 1 <= curr - 1) {
      // if equal then add any of the numbers to the array
      // if < than, then add the range string to the array
      result.push(
        prev + 1 === curr - 1 ? `${prev + 1}` : `${prev + 1}->${curr - 1}`
      );
    }
    // set prev to compare in the next iteration
    prev = curr;
  }
  return result;
}

var nums = [1, 2, 3, 4, 5, 6, 7, 8],
  lower = 1,
  upper = 9;
console.log(findMissingRanges(nums, lower, upper));
