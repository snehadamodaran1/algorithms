var permute = function (nums) {
  var result = [];

  function helper(arr) {
    if (arr.length === nums.length) {
      result.push([...arr]);
      console.log("return");
      return;
    }
    console.log("------------------------------");
    for (let i = 0; i < nums.length; i++) {
      if (arr.includes(nums[i])) continue;
      arr.push(nums[i]);
      console.log("push", arr, i);
      helper(arr);
      arr.pop();
      console.log("pop", arr, i);
    }
    console.log("*******************************");
  }
  helper([]);
  return result;
};

//unique
var permuteUnique = function (nums) {
  nums.sort(); // extra-
  const res = [];
  backTracking(res, [], new Set(), nums);

  return res;

  function backTracking(res, arr, visited = new Set(), nums) {
    if (arr.length == nums.length) {
      res.push([...arr]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited.has(i)) continue;
      if (i > 0 && nums[i] == nums[i - 1] && !visited.has(i - 1)) continue;
      arr.push(nums[i]);
      visited.add(i);
      backTracking(res, arr, visited, nums);
      arr.pop();
      visited.delete(i);
    }
  }
};

console.log(permute([1, 2, 3, 4]));
