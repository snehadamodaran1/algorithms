// var subsets = function (nums) {
//   let result = [];
//   dfs([], 0);

//   function dfs(current, index) {
//     result.push(current);
//     for (let i = index; i < nums.length; i++) {
//       dfs(current.concat(nums[i]), i + 1);
//     }
//   }

//   return result;
// };

//backtracking

var subsets = function (nums) {
  let result = [];
  let subset = [];
  dfs(0);

  function dfs(i) {
    if (i >= nums.length) {
      result.push([...subset]);
      return;
    }
    subset.push(nums[i]);
    dfs(i + 1);
    subset.pop();
    dfs(i + 1);
  }

  return result;
};

console.log(subsets([1, 2, 3]));
