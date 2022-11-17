// Description
// You are playing the following Flip Game with your friend: Given a string that contains only two characters: + and -, you can flip two consecutive "++" into "--", you can only flip one time. Please find all strings that can be obtained after one flip.

// Write a program to find all possible states of the string after one valid move.

// Contact me on wechat to get Amazon、Google requent Interview questions . (wechat id : jiuzhang0607)

// Example
// Example1

// Input:  s = "++++"
// Output:
// [
//   "--++",
//   "+--+",
//   "++--"
// ]
// Example2

// Input: s = "---+++-+++-+"
// Output:
// [
// 	"---+++-+---+",
// 	"---+++---+-+",
// 	"---+---+++-+",
// 	"-----+-+++-+"
// ]

function generatePossibleNextMoves(s) {
  const res = [];

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "+" && s[i + 1] === "+") {
      const temp = [...s];
      temp[i] = "-";
      temp[i + 1] = "-";
      res.push(temp.join(""));
    }
  }

  return res;
}
let s = "---+++-+++-+";
console.log(generatePossibleNextMoves(s));
