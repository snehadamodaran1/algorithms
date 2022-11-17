var hammingWeight = function (n) {
  //   return n.toString(2)?.replace("/0/g", "").length;
  return n.toString(2).match(/1/g)?.length ?? 0;
};

var n = 11111111111111111111111111111101;
console.log(hammingWeight(n));
