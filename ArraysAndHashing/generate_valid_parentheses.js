var generateParenthesis = function (n) {
  let res = [];
  let iterate = function (str, open, close) {
    if (open > n || close > n || close > open) return;
    if (open == n && close == n && str.length == n * 2) {
      res.push(str);
      return;
    }
    iterate(str + "(", open + 1, close);
    iterate(str + ")", open, close + 1);
  };
  iterate("", 0, 0);
  return res;
};

console.log(generateParenthesis(3));
