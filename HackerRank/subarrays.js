const ar = [1, 2, 3];

// slice from 1..3 - add 1 as the end index is not included

const ar2 = ar.slice(1, 4).reduce((acc, item) => acc + item);

function allSubArrays(arr, start = 0, end = 0) {
  //   console.log(ar.slice(start, end));
  if (end == arr.length) return;
  else if (start > end) allSubArrays(arr, 0, end + 1);
  else {
    console.log(arr.slice(start, end + 1));
    allSubArrays(arr, start + 1, end);
  }
  return;
}

// function printSubArrays(arr, start, end) {
//   // Stop if we have reached the end
//   // of the array
//   if (end == arr.length) return;
//   // Increment the end point and start
//   // from 0
//   else if (start > end) printSubArrays(arr, 0, end + 1);
//   // Print the subarray and increment
//   // the starting point
//   else {
//     console.log(arr.slice(start, end + 1));
//     printSubArrays(arr, start + 1, end);
//   }
//   return;
// }

// Driver code
var arr = [1, 2, 3];
// printSubArrays(arr, 0, 0);
console.log(allSubArrays(ar, 0, 0));
