/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let length = s.length;
  let mem = new Array(length).fill(true);

  return dfs(0);

  function dfs(ind) {
    if (ind === length) {
      return true;
    }
    for (let i = ind + 1; i <= length; i++) {
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
