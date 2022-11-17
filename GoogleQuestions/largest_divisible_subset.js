// Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

// answer[i] % answer[j] == 0, or
// answer[j] % answer[i] == 0
// If there are multiple solutions, return any of them.

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,2]
// Explanation: [1,3] is also accepted.
// Example 2:

// Input: nums = [1,2,4,8]
// Output: [1,2,4,8]

var largestDivisibleSubset = function (nums) {
  // sort is necessary. tbh, I am not sure if this is more or less work than the
  // DP-ish recursion below.

  nums.sort(function (a, b) {
    return a - b;
  });

  // keep track of our best array
  var max = [];
  // Added this for #step 2 look up efficiency
  var map = {};

  var grow = function (arr, index) {
    let pushed = false;

    // This line gave me the insight for the optimization of step 2
    // console.log(arr,nums[index]);

    // Test for better lengths
    if (arr.length > max.length) {
      max = arr;
    }

    // End condition
    if (index >= nums.length) {
      return;
    }

    // Use the next number, if we can
    if (arr.length === 0) {
      grow([nums[index]], index + 1);
    } else {
      // The test is, does it mod zero with the last added number
      if (nums[index] % arr[arr.length - 1] === 0) {
        // #Step 2 interject: check if we want to continue this charade
        if (map[nums[index]] && map[nums[index]] > arr.length + 1) {
        } else {
          // classic clone and add
          let nextarr = [...arr];
          nextarr.push(nums[index]);
          // record length for step 2
          map[nums[index]] = nextarr.length;
          grow(nextarr, index + 1);
        }
      }
    }

    // Don't use the next number and see where that leads.
    grow([...arr], index + 1);
  };

  grow([], 0);

  return max;
};
