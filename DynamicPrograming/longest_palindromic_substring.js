var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let max = "";
  for (let i = 0; i < s.length; i++) {
    var oddnumChars = checkPalindrome(i, i, s);
    var evennumChars = checkPalindrome(i, i + 1, s);
    let currMax =
      oddnumChars.length >= evennumChars.length ? oddnumChars : evennumChars;
    max = currMax.length > max.length ? currMax : max;
  }
  return max;
};

var checkPalindrome = function (l, r, s) {
  let curr = "";
  while (l >= 0 && r <= s.length && s[l] === s[r]) {
    curr = s.slice(l, r + 1);
    l--;
    r++;
  }
  return curr;
};

let s = "babad";
console.log(longestPalindrome(s));
