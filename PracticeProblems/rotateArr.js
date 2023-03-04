// var rotate = function (nums, k) {
//   let first = nums.slice(0, nums.length - k);
//   let second = nums.slice(nums.length - k, nums.length);
//   return second.concat(first);
// };
var rotate = function (nums, k) {
  let a;
  for (let i = 0; i < k; i++) {
    a = nums.pop();
    console.log(a);
    nums.unshift(a);
  }
  return nums;
};
// let nums = [1, 2, 3, 4, 5, 6, 7];
// console.log(rotate(nums, 3));

var rotate = function (nums, k) {
  let a = [];
  k = k % nums.length;
  console.log(k);
  //take last k and put them in front
  a = nums.splice(nums.length - k, nums.length);
  console.log(a);
  nums.unshift(...a);
  console.log(nums);
  // return nums;
};

let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate(nums, 3));
// [1, 2, 3, 4, 5, 6, 7][(5, 6, 7, 1, 2, 3, 4)];
//[3,99,-1,-100]
