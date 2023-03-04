var maxNumberOfBalloons = function (text) {
  let map = new Map();

  for (let i = 0; i < text.length; i++) {
    if (!map.has(text[i])) map.set(text[i], 1);
    else {
      map.set(text[i], map.get(text[i]) + 1);
    }
  }
  map.set("l", parseInt(map.get("l") / 2));
  map.set("o", parseInt(map.get("o") / 2));
  let minNum = Infinity;
  for (let item of map) {
    if (
      item[0] == "b" ||
      item[0] == "a" ||
      item[0] == "l" ||
      item[0] == "o" ||
      item[0] == "n"
    ) {
      minNum = Math.min(minNum, item[1]);
    }
  }
  return minNum;
};

let txt = "loonbalxballpoon";
console.log(maxNumberOfBalloons(txt));
