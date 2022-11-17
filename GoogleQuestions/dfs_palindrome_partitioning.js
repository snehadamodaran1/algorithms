// var minCut = function (s) {
//   function isPal(l, r) {
//     while (l < r) {
//       if (s[l] === s[r]) l++, r--;
//       else return false;
//     }
//     return true;
//   }

const { isPlainObject } = require("@vue/shared");

//   let map = new Map();
//   function dfs(idx = 0) {
//     if (idx === s.length) return 0;
//     if (map.has(idx)) return map.get(idx);
//     let min = Infinity;
//     for (let i = idx; i < s.length; i++) {
//       if (isPal(idx, i)) min = Math.min(min, 1 + dfs(i + 1));
//     }
//     map.set(idx, min);
//     return min;
//   }

//   return dfs() - 1;
// };

var palindromePartitioning = function (s) {
  function isPali(str, l, r) {
    while (l < r) {
      if (str[l] === str[r]) l++, r--;
      else return false;
    }
    return true;
  }
  var res = [];
  var arr = [];
  function dfs(i) {
    if (i >= s.length) {
      res.push([...arr]);
      return;
    }
    for (var j = i; j < s.length; j++) {
      if (isPali(s, i, j)) {
        arr.push(s.slice(i, j + 1));
        dfs(i + 1);
        arr.pop();
      }
    }
  }
  dfs(0);
  return res;
};

console.log(palindromePartitioning("aab"));
