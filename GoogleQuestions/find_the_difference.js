var findTheDifference = function (s, t) {
  Array.from(s).forEach((c) => (t = t.replace(new RegExp(c), "")));
  return t;
};
