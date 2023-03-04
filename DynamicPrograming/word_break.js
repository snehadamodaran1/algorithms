// var wordBreak = function (s, wordDict) {
//   let length = s.length;
//   let mem = new Array(length).fill(true);

const { defineSSRCustomElement } = require("vue");

//   return dfs(0);

//   function dfs(idx) {
//     if (idx === length) {
//       return true;
//     }

//     for (let i = idx + 1; i <= length; i++) {
//       let word = s.substring(i, idx);
//       if (wordDict.includes(word) && mem[idx]) {
//         if (dfs(i)) {
//           return true;
//         }
//       }
//     }

//     mem[idx] = false;
//     return false;
//   }
// };

var wordBreak = function (s, wordDict) {
  let length = s.length;
  let mem = new Array(length).fill(true);

  return dfs(0);

  function dfs(ind) {
    if (ind === length) {
      // reached the end of the word
      return true;
    }
    for (let i = ind + 1; i <= length; i++) {
      // loop from the place u found the last word
      let word = s.substring(i, ind);
      if (wordDict.includes(word) && mem[ind]) {
        if (dfs(i)) {
          return true;
        }
      }
    }
    mem[ind] = false;
    return false;
  }
};

// Dynamic programming
var wordBreak = function (s, wordDict) {
  let dp = Array(s.length).fill(0);
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (wordDict.has(s.substring(j, i + 1))) {
        dp[i] = dp[i] + dp[j];
      }
    }
  }
};
wordDict = ["apple", "pie", "pier"];
console.log(wordBreak("applepiepier", wordDict));
