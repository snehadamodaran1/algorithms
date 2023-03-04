let arr = [3, 2, 1, 0, 4];

function reachEnd(arr) {
  let indexPtr = 0;
  while (indexPtr <= arr.length) {
    console.log(indexPtr);
    if (arr[indexPtr] == 0) return false;
    if (indexPtr === arr.length - 1) {
      return true;
    }
    indexPtr = indexPtr + arr[indexPtr];
  }
  return false;
}

console.log(reachEnd(arr));
