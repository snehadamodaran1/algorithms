var robHouse = function (nums) {
  var robHouse1 = function (numss) {
    console.log(numss);
    var rob1 = 0,
      rob2 = 0;
    for (let n of numss) {
      let temp = Math.max(rob1 + n, rob2);
      rob1 = rob2;
      rob2 = temp;
    }
    return rob2;
  };
  var val = Math.max(
    nums[0],
    robHouse1(nums.slice(1)),
    robHouse1(nums.slice(0, -1))
  ); // nums[0] if inout has only one house
  return val;
};

let nums = [1, 2, 3, 1];

console.log(robHouse(nums));
