// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// var longestConsecutive = function (nums) {
//   if (!nums || nums.length === 0) return 0;
//   let map = new Map(),
//     max = 0;
//   for (let n of nums) {
//     console.log("n:", n, !map.has(n));
//     if (!map.has(n)) {
//       let left = map.has(n - 1) ? map.get(n - 1) : 0;
//       let right = map.has(n + 1) ? map.get(n + 1) : 0;
//       let sum = left + right + 1;
//       map.set(n, sum);
//       max = Math.max(max, sum);
//       map.set(n - left, sum);
//       map.set(n + right, sum);
//     } else {
//       continue;
//     }
//   }
//   return max;
// };
// function longestConsecutive(nums) {
//   let max = 0;
//   const lens = {};

//   for (let n of nums) {
//     if (lens[n] != null) {
//       console.log("n:", n, lens[n]);
//       continue;
//     }

//     const l = lens[n - 1] || 0; // left length
//     const r = lens[n + 1] || 0; // right length
//     console.log("n:", n, l, r);
//     const len = l + r + 1;

//     // extend the length to the boundaries
//     lens[n - l] = len;
//     lens[n] = len;
//     lens[n + r] = len;

//     console.log(lens);
//     max = Math.max(max, len);
//   }

//   return max;
// }

function longestConsecutive(nums) {
  let max = 0;
  const map = {};
  for (let num of nums) {
    console.log(map[num], num);
    if (map[num] != null) {
      console.log("continue", map[num], num);
      continue;
    }
    l = map[num - 1] || 0;
    r = map[num + 1] || 0;
    len = l + r + 1;

    console.log(map[num], num, num - l, len);
    map[num - l] = len;
    map[num] = len;
    map[num + r] = len;

    max = Math.max(max, len);
  }

  return max;
}

var nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
