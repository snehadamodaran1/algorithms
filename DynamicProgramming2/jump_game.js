// var canJump = function (nums) {
//   let jump = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     jump--;
//     if (jump < 0) return false;
//     if (nums[i] >= jump) {
//       jump = nums[i];
//     }
//   }
//   return true;
// };
var canJump = function (nums) {
  let jump = nums[0];
  for (var i = 0; i < nums.length; i++) {
    jump--;
    if (jump < 0) return false;
    if (nums[i] >= jump) {
      jump = nums[i];
    }
  }
  return true;
};
var nums = [2, 3, 1, 1, 4];
console.log(canJump(nums));
