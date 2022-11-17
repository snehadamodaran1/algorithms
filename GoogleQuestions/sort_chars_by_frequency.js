var frequencySort = function (s) {
  const mapChars = s.split("").reduce((acc, ch) => {
    acc[ch] = (acc[ch] || 0) + 1;
    return acc;
  }, {});

  const sortedChars = Object.entries(mapChars).sort((a, b) => b[1] - a[1]);

  return sortedChars.reduce((acc, [ch, count]) => {
    acc += ch.repeat(count);
    return acc;
  }, "");
};

// var frequencySort = function (s) {
//   const stringArr = s.split("");
//   let result = "";
//   let map = {};
//   for (let i = 0; i < stringArr.length; i++) {
//     map[stringArr[i]] = map[stringArr[i]] + 1 || 1;
//   }

//   const sortedArr = Object.entries(map).sort(([, a], [, b]) => b - a);

//   for (let j = 0; j < sortedArr.length; j++) {
//     for (let k = 0; k < sortedArr[j][1]; k++) {
//       result += sortedArr[j][0];
//     }
//   }
//   return result;
// };
