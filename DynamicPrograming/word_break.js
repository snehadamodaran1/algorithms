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

// function dfs(ind) {
//   if (ind === length) {
//     return true;
//   }
//   for (let i = ind + 1; i <= length; i++) {
//     let word = s.substring(ind, i);
//     if (wordDict.includes(word) && mem[ind]) {
//       if (dfs(i)) {
//         return true;
//       }
//     }
//   }
// }
