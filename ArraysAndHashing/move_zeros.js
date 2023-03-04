// wrong strtegy

// var moveZeroes = function (nums) {
//   let left = 0,
//     right = nums.length - 1;

//   if (nums.length == 1 && nums[0] == 0) return nums;

//   while (left <= right) {
//     if (nums[left] !== 0) {
//       left++;
//     }
//     if (nums[right] == 0) {
//       right--;
//     }
//     if (nums[right] !== 0 && nums[left] == 0) {
//       let temp = nums[left];
//       nums[left] = nums[right];
//       nums[right] = temp;
//       if (left == right) break;
//       left++;
//       right--;
//     }
//   }
//   return nums;
// };
// nums = [0];
// console.log(moveZeroes(nums));

// right strategy

// var moveZeroes = function (nums) {
//   let left = nums.length - 2,
//     right = nums.length - 1;

//   if (nums.length == 1 && nums[0] == 0) return nums;

//   while (right >= 0) {
//     console.log("outside", nums[left], nums[right]);
//     if (nums[left] == 0 && nums[right] == 0) {
//       break;
//     }
//     if (nums[left] == 0 && nums[right] !== 0) {
//       left--;
//       right--;
//       if (right < 0) break;
//     }
//     if (nums[left] !== 0 && nums[right] !== 0) {
//       console.log("inside cond1");
//       left--;
//       if (right < 0) break;
//     }
//     if (nums[left] !== 0 && nums[right] == 0) {
//       console.log("inside cond2");
//       let temp = nums[left];
//       nums[left] = nums[right];
//       nums[right] = temp;
//       left--;
//       right--;
//       if (right < 0) break;
//     }
//   }
//   return nums;
// };

// var moveZeroes = function (nums) {
//   let left = 0,
//     right = 1;

//   if (nums.length == 1 && nums[0] == 0) return nums;

//   while (right <= nums.length - 1) {
//     console.log(left, right, nums);
//     if (
//       (nums[right] !== 0 && nums[left] !== 0) ||
//       (nums[right] == 0 && nums[left] !== 0)
//     ) {
//       left++;
//       right++;
//     } else if (nums[right] == 0 && nums[left] == 0) {
//       right++;
//     } else if (nums[right] !== 0 && nums[left] == 0) {
//       let temp = nums[left];
//       nums[left] = nums[right];
//       nums[right] = temp;
//       left++;
//       right++;
//     }
//     if (right > nums.length - 1) break;
//   }
//   return nums;
// };
var moveZeroes = function (nums) {
  // O(n) Time Complexity
  // 2 Pointers
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log("---------", left, i);
    if (nums[i] !== 0) {
      console.log("inside", nums[left], nums[i], nums);
      let temp = nums[left];
      nums[left] = nums[i];
      nums[i] = temp;
      left++;
    }
  }
  return nums;
};
nums = [1, 0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
