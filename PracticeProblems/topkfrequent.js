var tokFreq = function (arr) {
  var freqHash = new Map();
  for (let i = 0; i < arr.length; i++) {
    var curFreq = freqHash.get(arr[i]);
    if (curFreq) {
      freqHash.set(arr[i], curFreq + 1);
    } else {
      freqHash.set(arr[i], 1);
    }
  }
  var sortedArr = [...freqHash].sort((a, b) => a - b);
  return [sortedArr[0][1], sortedArr[1][1]];
};

var arr = [2, 2, 2, 3, 3, 3, 5, 7, 1, 2, 4, 5, 8];
console.log(tokFreq(arr));
