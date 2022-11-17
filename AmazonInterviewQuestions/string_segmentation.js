// You are given a dictionary of words and a large input string. You have to find out whether the input string can be completely segmented into the words of a given dictionary. The following two examples elaborate on the problem further.

// Given a dictionary of words.

// apple
// apple
// pear
// pie
// Input string of “applepie” can be segmented into dictionary words.

// apple
// pie
// Input string “applepeer” cannot be segmented into dictionary words.

// apple
// peer


let canSegmentString = function(s, dictionary) {
    for (let i = 1; i < s.length + 1; i++) {
      let first = s.substr(0, i);
      if (dictionary.has(first)) {
        let second = s.substr(i);
        if (second.length === 0) {
          return true;
        }
        if (dictionary.has(second)) {
          return true;
        }
        if (canSegmentString(second, dictionary)) {
            return true;
        }
      }
    }
    return false;
  };
  
  let s = "hellonow";
  let dictionary = new Set(["hello", "hello", "on", "now"]);
  if (canSegmentString(s, dictionary)) {
     console.log("String Can be Segmented");
  } 
  else {
     console.log("String Can NOT be Segmented");
  }