function insertElement(arr) {
  let j = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let diff = arr[i + 1] - arr[i];
    if (diff > 1) {
      j = arr[i];
      while (j < arr[i + 1] - 1) {
        j = j + 1;
        console.log(j);
      }
    }
  }
}
let arr = [11, 12, 13, 15, 16, 19, 20, 30, 33, 35, 48, 50];
insertElement(arr);
