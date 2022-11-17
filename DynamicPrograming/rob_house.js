var rob = function (nums) {
  let rob1 = 0,
    rob2 = 0;
  for (let n of nums) {
    temp = Math.max(rob1 + n, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
};

nums = [2, 7, 9, 3, 1];
// console.log(rob(nums));
console.log(nums.slice(1));
