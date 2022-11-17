var countBits = function (n) {
  let arr = [];
  for (var i = 0; i <= n; i++) {
    arr.push(Number(i).toString(2).replace(/0/g, "").length);
  }
  return arr;
};

var n = 2;
console.log(countBits(n));
