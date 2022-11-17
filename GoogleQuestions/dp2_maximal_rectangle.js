var maximalRectangle = function (matrix) {
  if (!matrix.length) return 0;
  const R_NUM = matrix.length,
    C_NUM = matrix[0].length;
  const histogram = Array(C_NUM).fill(0);
  let maxArea = 0;

  for (let r = 0; r < R_NUM; r++) {
    for (let c = 0; c < C_NUM; c++) {
      if (+matrix[r][c]) histogram[c]++;
      else histogram[c] = 0;
    }

    for (let c = 0; c < C_NUM; c++) {
      let left = c - 1,
        right = c + 1;
      while (left >= 0 && histogram[left] >= histogram[c]) left--;
      while (right < C_NUM && histogram[right] >= histogram[c]) right++;
      maxArea = Math.max(histogram[c] * (right - left - 1), maxArea);
    }
  }
  return maxArea;
};
