let arr = [1, 2, [3, [4, 5, 6], 7], 8];

let flatArray = [].concat(...arr);

let flatArray1 = arr.flat();

console.log(flatArray, "--------------", flatArray1);
