var longestCommonPrefix = function (strs) {
  let prefix = "",
    i = 0;
  while (i < strs[0].length) {
    if (checkIfAllStrHaveCharAtPosition(i, strs[0][i], strs)) {
      prefix = prefix + strs[0][i];
      i++;
    } else {
      return prefix;
    }
  }
  return prefix;
};
function checkIfAllStrHaveCharAtPosition(i, charater, strs) {
  for (let j = 0; j < strs.length; j++) {
    if (strs[j][i] !== charater) return false;
  }
  return true;
}
let strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs));
