var removeDuplicateLetters = function (s) {
  const count = {},
    visited = {},
    res = [];
  for (const c of s) count[c] = count[c] ? (count[c] += 1) : 1;
  for (const c of s) {
    count[c] -= 1;
    if (visited[c]) continue;
    while (
      res.length &&
      c < res[res.length - 1] &&
      count[res[res.length - 1]] > 0
    ) {
      visited[res.pop()] = 0;
    }
    res.push(c);
    visited[c] = 1;
  }
  return res.join("");
};
