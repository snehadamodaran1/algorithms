// Given a rows x cols screen and a sentence represented by a list of non-empty words, find how many times the given sentence can be fitted on the screen.

// Contact me on wechat to get Amazon、Google requent Interview questions . (wechat id : jiuzhang0607)

// A word cannot be split into two lines.
// The order of words in the sentence must remain unchanged.
// Two consecutive words in a line must be separated by a single space.
// Total words in the sentence won't exceed 100.
// Length of each word is greater than 0 and won't exceed 10.
// 1 ≤ rows, cols ≤ 20,000.

function wordsTyping(sentence, rows, cols) {
  var cnt = 0;
  var pos = 0;
  var maxLength = sentence.length;
  for (let s of sentence) {
    // console.log(s.length);
    maxLength += s.length; //number of words + length of each word
  }
  for (var r = 0; r < rows; r++) {
    var remaining = cols;
    var curr = 0;
    while (remaining > 0) {
      if (pos == 0 && remaining > maxLength) {
        //entire sentence
        cnt += remaining / maxLength; // how many times over can the entire sentence fit in one line
        remaining = remaining % maxLength; //  remaining after fitting item
      }

      if (sentence[pos].length > remaining) {
        break;
      } else {
        curr += sentence[pos].length + 1;
        remaining -= sentence[pos].length + 1;
        pos++;
        if (pos >= sentence.length) {
          // repeat sentence
          pos = 0;
          cnt++;
        }
      }
    }
  }
  return cnt;
}
var sentence = ["a", "bcd", "e"],
  rows = 3,
  cols = 6;
console.log(wordsTyping(sentence, rows, cols));
