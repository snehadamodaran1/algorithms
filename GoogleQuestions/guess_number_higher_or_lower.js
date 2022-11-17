var guessNumber = function (n) {
  let low = 1;
  let high = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    const apiResult = guess(mid);

    if (apiResult === 0) {
      return mid;
    } else if (apiResult === 1) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
};
