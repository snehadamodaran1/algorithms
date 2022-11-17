var letterCombinations = function (input) {
  if (!digits) return [];

  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const n = input.length;

  let output = [];

  function backtrack(i, str) {
    if (i === n) {
      output.push(str); // the str will be equal to then of chars in input str
      return;
    }

    for (let char of map[input[i]]) {
      backtrack(i + 1, str + char); // keep adding the char to the string till the length becomes eqaual to input
    }
  }

  backtrack(0, "");

  return output;
};

// var letterCombinations = function (digits) {
//   if (!digits) {
//     return [];
//   }
//   var len = digits.length;
//   var map = new Map();
//   map.set("2", "abc");
//   map.set("3", "def");
//   map.set("4", "ghi");
//   map.set("5", "jkl");
//   map.set("6", "mno");
//   map.set("7", "pqrs");
//   map.set("8", "tuv");
//   map.set("9", "wxyz");
//   var res = [];

//   function generate(i, str) {
//     // terminator
//     if (i == len) {
//       res.push(str);
//       return;
//     }
//     // process
//     // drill down
//     var tmp = map.get(digits[i]);

//     for (var r = 0; r < tmp.length; r++) {
//       console.log(i, i + 1, str + tmp[r], tmp.length);
//       generate(i + 1, str + tmp[r]);
//     }
//   }
//   console.log("hereh");
//   generate(0, "");
//   return res;
// };

digits = "7";

console.log(letterCombinations(digits));
