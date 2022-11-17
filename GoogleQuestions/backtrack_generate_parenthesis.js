var generateParenthesis = function (n) {
  let res = [];
  function backtrack(current, left, right) {
    if (current.length === n * 2) {
      res.push(current);
      return res;
    }

    if (left < n) {
      //cause number of open parenthesis is n
      backtrack(current.concat("("), left + 1, right);
    }
    if (left > right) {
      // u can add a close parenthesis only if if its number is greater than close ones
      backtrack(current.concat(")"), left, right + 1);
    }
  }
  backtrack("", 0, 0);
  return res;
};
n = 3;
console.log(generateParenthesis(n));
