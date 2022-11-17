// Given a non-empty string word and an abbreviation abbr, return whether the string matches with the given abbreviation.

// A string such as "word" contains only the following valid abbreviations:

// ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
// Contact me on wechat to get Amazon、Google requent Interview questions . (wechat id : jiuzhang0607)

// Where 1 means one character is omitted, 2 means two characters are omitted, and so on.
// Notice that only the above abbreviations are valid abbreviations of the string word. Any other string is not a valid abbreviation of word.

// Example
// Example 1:

// Input : s = "internationalization", abbr = "i12iz4n"
// Output : true
// Example 2:

// Input : s = "apple", abbr = "a2e"
// Output : false

var validWordAbbreviation = function (word, abbr) {
  if (word === null || abbr === null) return false;
  var num = 0;
  var idx = 0;

  abbr = abbr.split("");

  for (var c in abbr) {
    if (abbr[c] === "0" && num === 0) return false;
    
    if (abbr[c] >= "0" && abbr[c] <= "9") {
      num = num * 10 + (abbr[c] - "0");
    } else {
      idx += num;
      if (idx >= word.length || abbr[c] != word.charAt(idx)) return false;
      num = 0;
      idx++;
    }
  }

  return idx + num == word.length;
};
