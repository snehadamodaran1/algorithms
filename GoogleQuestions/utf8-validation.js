var validUtf8 = function (data) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    let n = data[i];
    if (count == 0) {
      if (n >> 3 == 0b11110) count = 3;
      else if (n >> 4 == 0b1110) count = 2;
      else if (n >> 5 == 0b110) count = 1;
      else if (n >> 7) return false;
    } else {
      if (n >> 6 != 0b10) return false;
      count--;
    }
  }

  return count == 0;
};
