/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (!height) return 0;
  let l = 0,
    r = height.length - 1;
  let res = 0;
  let leftMax = height[l],
    rightMax = height[r];
  while (l < r) {
    if (leftMax < rightMax) {
      l += 1;
      leftMax = Math.max(leftMax, height[l]);
      res += leftMax - height[l];
    } else {
      r -= 1;
      rightMax = Math.max(rightMax, height[r]);
      res += rightMax - height[r];
    }
  }
  return res;
};

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
