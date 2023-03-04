// var sortedSquares = function (nums) {
//   let i = 0,
//     j = 0;
//   res = [];

//   if (nums.length == 0) return;

//   if (nums.length == 1) return [nums[0] * nums[0]];

//   while (nums[j] < 0) j++;
//   if (!j) j = nums.length - 2;
//   i = j - 1;

//   while (i >= 0 || j < nums.length - 1) {
//     console.log(nums[i], nums[j]);
//     if (-1 * nums[i] < nums[j]) {
//       res.push(nums[i] * nums[i]);
//       i--;
//     } else {
//       res.push(nums[j] * nums[j]);
//       j++;
//     }
//   }
//   res.push(nums[j] * nums[j]);
//   return res;
// };

var sortedSquares = function (nums) {
  const res = [];
  let i = 0;
  while (nums[i] < 0) i++;
  let j = i - 1;
  while (j >= 0 || i < nums.length) {
    console.log(nums[i], nums[j]);
    if (i >= nums.length || -nums[j] <= nums[i]) {
      res.push(nums[j--] ** 2);
    } else {
      res.push(nums[i++] ** 2);
    }
  }
  return res;
};

let nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));
