/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  var res = 0;
  var isPalindrome = function (l, r, s) {
    while (l >= 0 && r <= s.length && s[l] === s[r]) {
      res++;
      l--;
      r++;
    }
    l--;
    r++;
  };

  for (let i = 0; i < s.length; i++) {
    isPalindrome(i, i, s);
    isPalindrome(i, i + 1, s);
  }
  return res;
};
