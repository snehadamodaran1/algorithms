// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

var longestPalindrome = function (s) {
  let map = {};
  let res = 0;
  for (let char of s) {
    map[char] = map[char] + 1 || 1;
    if (map[char] % 2 === 0) res += 2;
  }
  return s.length > res ? res + 1 : res;
};

// var longestPalindrome = function(s) {
//     const charMap = new Map();
//     let sum = 0

//     for(let c of s) {
//         charMap.set(c, (charMap.get(c) || 0) + 1);
//         if(!(charMap.get(c) % 2)) sum += 2;
//     }
//     return s.length > sum ? ++sum : sum;
// };
