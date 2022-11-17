// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1, 2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// var topKFrequent = function (nums, k) {
//   var hash = {};
//   var result = [];
//   for (let num of nums) {
//     //of is very imaportant
//     if (!hash[num]) hash[num] = 1;
//     else {
//       hash[num] = hash[num]++;
//     }
//   }

//   var valueArr = Object.entries(hash); // converts to array for sorting
//   console.log(valueArr);
//   valueArr.sort((a, b) => {
//     return b[1] - a[1]; // a[1] or b[1] is the frequency value
//   });

//   // for (let i = 0; i < k; i++) {
//   //   console.log(valueArr[i], k);
//   //   result.push(parseInt(valueArr[i][0]));
//   // }
//   // get the k most frequent ones , and push it to the final result
//   valueArr.slice(0, k).forEach((element) => {
//     console.log(element[0]);
//     result.push(+element[0]);
//   });
//   return result;
// };

var topKFrequent = function (nums, k) {
  let hash = {},
    res = [],
    j = 0;
  for (let num of nums) {
    hash[num] = (hash[num] || 0) + 1;
  }
  console.log(hash);
  let sorted = Object.entries(hash).sort((a, b) => b[1] - a[1]),
    count = 0;
  while (j < k) {
    res.push(Number(sorted[j][0]));
    j++;
  }
  return res;
};

var nums = [1, 1, 1, 2, 2, 3],
  k = 1;
console.log(topKFrequent(nums, 2));
