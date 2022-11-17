// Given a string, determine if a permutation of the string could form a palindrome.
// Example1
// Input: s = "code"
// Output: False
// Explanation:
// No solution

// Example2
// Input: s = "aab"
// Output: True
// Explanation:
// "aab" -- > "aba"

// Example3
// Input: s = "carerac"
// Output: True
// Explanation:
// "carerac" --> "carerac"

var canPermutePalindrome = function (s) {
  // write your code here
  var hash = {};
  let oddCount = 0;
  for (let i = 0; i < s.length; i++) {
    var alpha = s[i];
    if (hash[alpha] == undefined) hash[alpha] = 1;
    else hash[alpha] = hash[alpha] + 1;
  }
  for (let a of Object.values(hash)) {
    if (a % 2 !== 0) oddCount++;
  }
  if (oddCount > 1) return false;
  return true;
};
var s = "carerac";
console.log(canPermutePalindrome(s));
