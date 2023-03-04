// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// // console.log("Welcome to Programiz!");

// function flat(arr,res = []){
//     for(let item of arr){
//         if(Array.isArray(item)){
//             flat(item, res)
//         }else{
//             res.push(item)
//         }
//     }
//     return res;
// }
// const arr =  [4,[5,6,[7,8],9]];
// // console.log(arr.flat())
// console.log(flat(arr,res = []))

// console.log(2+4+"12")

// console.log('12'+4+2)

// console.log([]-[])

const domain = "abc@falabella.com";
let res = "";
if (
  !domain.indexOf("@") ||
  !domain.indexOf(".") ||
  domain.indexOf("@") > domain.indexOf(".")
)
  console.log("Invalid Input");
else {
  let arr = domain.split("@");
  res = arr[1].split(".")[0];
}
console.log("Result: ", res);

const arr = ["a", "$", 5, "*", "q", "@", 5, 6, 2, "%"];
function reverseArr(arr) {
  let left = 0,
    right = arr.length - 1,
    res = [];
  while (left < right) {
    if (
      arr[left] == "$" ||
      arr[left] == "*" ||
      arr[left] == "@" ||
      arr[left] == "%"
    ) {
      res.push(arr[left]);
      left += 1;
    } else if (
      arr[right] == "$" ||
      arr[right] == "*" ||
      arr[right] == "@" ||
      arr[right] == "%"
    ) {
      res.push(arr[right]);
      right -= 1;
    } else {
      // let temp = arr[left];
      // arr[left] = arr[right];
      // arr[right] = temp;
      res.push(right);
      res.push(left);
      left += 1;
      right -= 1;
    }
  }
}
console.log(arr);
