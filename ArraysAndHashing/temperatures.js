const dailyTemperatures = (temps) => {
  let results = [];
  for (let i = 0; i < temps.length; i++) {
    for (let j = i; j < temps.length; j++) {
      console.log(i, j);
      if (temps[j] > temps[i]) {
        results[i] = j - i;
        break;
      }
      if (j == temps.length - 1) {
        results[i] = 0;
        // break;
      }
    }
  }
  return results;
};

temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));
