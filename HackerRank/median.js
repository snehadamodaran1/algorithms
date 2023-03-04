function findMedian(arr) {
  // Write your code here
  let sortedArr = arr.sort();
  let medianIndex = parseInt(arr.length / 2);
  console.log(sortedArr);
  if (arr.length % 2 == 0) {
    return (sortedArr[medianIndex - 1] + sortedArr[medianIndex]) / 2;
  }
  return sortedArr[medianIndex];
}

let arr = [0, 4, 7, 9, 2, 3, 1, 8];
console.log(findMedian(arr));
