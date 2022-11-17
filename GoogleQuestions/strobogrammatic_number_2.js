function findStrobogrammatic(n) {
  return helper(n, n);

  function helper(n, m) {
    if (n === 0) return [""];
    if (n === 1) return ["0", "1", "8"];

    const result = [];
    const list = helper(n - 2, m);
    console.log(list);

    for (let i = 0; i < list.length; i++) {
      const s = list[i];

      if (n !== m) result.push("0" + s + "0");

      result.push("1" + s + "1");
      result.push("6" + s + "9");
      result.push("8" + s + "8");
      result.push("9" + s + "6");
    }

    return result;
  }
}
console.log(findStrobogrammatic(4));
