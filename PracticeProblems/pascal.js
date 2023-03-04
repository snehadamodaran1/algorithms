// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
function pascal(n) {
  var arr = [];
  let prev = [];
  for (let i = 1; i <= n; i++) {
    let j = 1;
    while (j <= i) {
      if (j == 1) arr.push(1);
      else if (i == j) {
        arr.push(1);
        break;
      } else {
        let val = prev[j - 2] + prev[j - 1];
        arr.push(val);
      }
      j++;
    }
    // console.log(arr)
    printArr(arr, n);
    prev = [...arr];
    arr = [];
  }
}
function printArr(arr, n) {
  let str = "";
  // console.log(n-arr.length)
  for (let i = 0; i < n - arr.length; i++) {
    str = str + "_";
  }
  for (let i = 0; i < arr.length; i++) {
    str = str + arr[i] + " ";
  }
  console.log(str);
}
pascal(8);
