const minDistance = (A, B) => {
  const a = A.length;
  const b = B.length;

  const dp = [...Array(a)].map(() => Array(b).fill(-1));

  const prefixDist = (i, j) => {
    if (i < 0) return j + 1;
    if (j < 0) return i + 1;

    if (dp[i][j] === -1) {
      if (A[i] === B[j]) {
        dp[i][j] = prefixDist(i - 1, j - 1);
      } else {
        dp[i][j] =
          1 +
          Math.min(
            prefixDist(i - 1, j - 1), // replace
            prefixDist(i, j - 1), // insert
            prefixDist(i - 1, j) // delete
          );
      }
    }

    return dp[i][j];
  };

  return prefixDist(a - 1, b - 1);
};
