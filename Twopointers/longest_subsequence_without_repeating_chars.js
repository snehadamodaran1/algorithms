// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  var l = 0;
  var max = 0;
  for (r = 0; r < s.length; r++) {
    const rightChar = s.charAt(r);
    while (set.has(s[r])) {
      const leftChar = s.charAt(l++);
      set.delete(leftChar);
    }
    set.add(rightChar);
    max = Math.max(max, r - l + 1);
  }
  console.log(max);
  return max;
};
var s = "abcabcbbvgk";
console.log(lengthOfLongestSubstring(s));
