// var addStrings = function(num1, num2) {
//     const sum = BigInt(num1) + BigInt(num2);
//     return sum.toString();
//   };

var addStrings = function (num1, num2) {
  // Let's make sure that num1 is not shorter than num2
  if (num1.length < num2.length) {
    let tmp = num2;
    num2 = num1;
    num1 = tmp;
  }

  let n1 = num1.length;
  let n2 = num2.length;
  let arr = num1.split("");
  let carry = 0;
  let total;

  for (let i = n1 - 1, j = n2 - 1; i >= 0; i--, j--) {
    let term2 = carry + (j >= 0 ? parseInt(num2[j]) : 0);
    if (term2) {
      total = parseInt(num1[i]) + term2;
      if (total > 9) {
        arr[i] = (total - 10).toString();
        carry = 1;
      } else {
        arr[i] = total.toString();
        carry = 0;
        if (j < 0) {
          break;
        }
      }
    }
  }

  return total > 9 ? "1" + arr.join("") : arr.join("");
};
