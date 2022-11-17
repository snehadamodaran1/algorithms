var hIndex = function (citations) {
  citations.sort((a, b) => a - b);
  let n = citations.length,
    i;
  for (i = 1; i <= n; i++) {
    // remember to start from 1
    console.log(citations[n - i], i);
    if (citations[n - i] < i) break; // go backwards n-i
  }
  return i - 1;
};
var citations = [3, 0, 6, 1, 5];

console.log(hIndex(citations));

// not optimized
// var hIndex = function (citations) {
//     citations.sort((a, b) => b - a);
//       let hindex = 0;

//       let low = 0,
//         high = n - 1;

//       while (low <= high) {
//         let mid = (low + high) / 2;
//         if (citations[mid] >= mid + 1) {
//           low = mid + 1;
//           hindex = mid + 1;
//         } else {
//           high = mid - 1;
//         }
//       }
//     return hindex;
//   };
