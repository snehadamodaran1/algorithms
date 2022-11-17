// var missingNumber = function (nums) {
//   let sum = 0,
//     res = 0;
//   for (var i = 1; i <= nums.length; i++) {
//     sum = sum + i;
//     res = res + nums[i - 1];
//   }
//   return sum - res;
// };

function solution(A) {
  A = A.sort();
  console.log(A);
  // write your code in JavaScript (Node.js 8.9.4)
  for (let i = -1; i < A.length - 1; i++) {
    if (A.includes(A[i] + 1)) {
      continue;
    } else {
      if (A[i] + 1 > 0) {
        return A[i] + 1;
      }
    }
  }
}
let nums = [1, 3, 6, 4, 1, 2];
console.log(solution(nums));

// function typeCheck(object) {
//   for (k in object) {

//     if (k.includes('string')) {
//       console.log(object[k]);
//       if (typeof(object[k]) != 'string') {
//         throw Error;
//       }
//     } else if (k.includes('int') || k.includes('float') || k.includes('number')) {
//       console.log(object[k]);
//       if (typeof(object[k]) != 'number') {
//         throw Error;
//       } else if (k.includes('int')) {
//         if (Number.isInteger(object[k])) {
//           console.log("true");
//         } else {
//           throw Error;
//         }
//       } else if (k.includes('float')) {
//         if (Number.isInteger(object[k])) {
//           throw Error;
//         } else {
//           console.log("true");
//         }
//       }
//     } else if (k.includes('bool')) {
//       if (typeof(object[k]) != 'boolean') {
//         throw Error;
//       }
//     } else if (typeof(object[k] == 'object')) {
//       console.log('object' + " " + object[k]);
//     } else {
//       return object;
//     }
//   }

//   return object;
// }
