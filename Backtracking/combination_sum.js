// var combinationSum = function (candidates, target) {
//   let canLength = candidates.length;
//   let ptr = 0;
//   let res = [];
//   if (target === 0) {
//     return 0;
//   }
//   const dfs = (sum, ptr, arr) => {
//     if (sum === target) {
//       res.push(arr);
//     } else if (sum > target) {
//       return;
//     }

//     for (let i = ptr; i < canLength; i++) {
//       dfs(sum + candidates[i], i, [...arr, candidates[i]]);
//     }
//   };
//   dfs(0, 0, []);
//   return res;
// };

var combinationSun = function (candidates, target) {
  var canLength = candidates.length;
  var res = [];
  var ptr = 0;
  if (target === 0) {
    return 0;
  }
  const dfs = function (sum, ptr, arr) {
    if (sum === target) res.push(arr);
    if (sum > target) {
      return;
    }
    for (var i = ptr; i < canLength; i++) {
      dfs(sum + candidates[i], i, [...arr, candidates[i]]);
    }
  };
  dfs(0, 0, []);
  return res;
};
