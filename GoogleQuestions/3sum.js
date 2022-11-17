function threeSum(nums) {
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);
  let res = [];
  let sum = 0;
  console.log(nums);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; //importatnt to remove duplicstes
    p = i + 1;
    q = nums.length - 1;
    while (p < q) {
      sum = nums[i] + nums[p] + nums[q];

      if (sum === 0) {
        res.push([nums[i], nums[p], nums[q]]);
        while (nums[p] === nums[p + 1]) p++;
        while (nums[q] === nums[q + 1]) q--;
        p++;
        q--;
      } else if (sum > 0) {
        q--;
      } else {
        p++;
      }
    }
  }
  return res;
}

let numbers = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(numbers));
