var maxProduct = function (nums) {
  let res = Math.max(...nums);
  console.log(res);
  let curMin = 1,
    curMax = 1;
  for (let n of nums) {
    if (n == 0) {
      curMax = 1;
      curMin = 1;
      continue;
    }
    temp = n * curMax;
    curMax = Math.max(n * curMax, n * curMin, n);
    curMin = Math.min(temp, n * curMin, n);
    res = Math.max(res, curMax);
  }
  return res;
};

let nums = [-2, 0, -1];

console.log(maxProduct(nums));
