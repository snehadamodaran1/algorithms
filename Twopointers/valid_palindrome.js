// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
var isLetter = function (code) {
  console.log(code);
  //   const code = ch.charCodeAt(0);
  if (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  )
    return true;
  return false;
};

var toLowerCase = function (code) {
  if (code >= 65 && code <= 90) {
    return code + 32;
  } else {
    return code;
  }
};

var valid_palindrome = function (input) {
  var cleanStr = "";
  //   for (let i = 0; i < str.length; i++) {
  //     if (isAlphanumeric(str[i])) cleanStr = cleanStr + str[i];
  //   }
  //   for (let i = 0; i < cleanStr.length; i++) {
  //     if (isAlphanumeric(str[i])) cleanStr = cleanStr + str[i];
  //   }
  var start = 0;
  var end = input.length - 1;
  while (start < end) {
    var s = input.charCodeAt(start);
    var e = input.charCodeAt(end);

    if (!isLetter(s)) {
      start++;
      continue;
    }
    if (!isLetter(e)) {
      end--;
      continue;
    }

    if (toLowerCase(s) !== toLowerCase(e)) {
      return false;
    }
    start++;
    end--;
    return true;
  }
};
var str = "A man, a plan, ga canal: Panama";
console.log(valid_palindrome(str));
