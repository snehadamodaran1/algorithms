var decodeString = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "]") {
      stack.push(s[i]);
    } else {
      let substr = "";
      while (stack[stack.length - 1] !== "[") {
        // go up until '['
        substr = stack.pop() + substr;
      }
      stack.pop(); // remove '['

      let k = "";
      while (stack && !isNaN(stack[stack.length - 1])) {
        // check if it's a number
        k = stack.pop() + k;
      }
      stack.push(substr.repeat(parseInt(k))); // repeat the string as many times as k
    }
  }
  return stack.join("");
};

// var decodeStringRec = function (s, x) {
//   let buildStr = "",
//     lastestNumber = "";
//   for (let i = x; i < s.length; i += 1) {
//     let currChar = s[i];
//     if (currChar === "[") {
//       let [str, index] = decodeStringRec(s, i + 1);
//       buildStr += str.repeat(lastestNumber);
//       lastestNumber = "";
//       i = index;
//     } else if (currChar === "]") {
//       return [buildStr, i];
//     } else {
//       if ("a" <= currChar && currChar <= "z") {
//         buildStr += currChar;
//       } else {
//         lastestNumber += currChar;
//       }
//     }
//   }
//   return buildStr;
// };

var decodeString = function (s) {
  return decodeStringRec(s, 0);
};
