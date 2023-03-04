var floodFill = function (image, sr, sc, newColor) {
  const color = image[sr][sc];
  if (color === newColor) return;
  let queue = [];
  queue.push([sr, sc]);
  while (queue.length) {
    const [x, y] = queue.shift();
    image[x][y] = newColor;
    if (x - 1 >= 0 && image[x - 1][y] === color) queue.push([x - 1, y]);
    if (x + 1 < image.length && image[x + 1][y] === color)
      queue.push([x + 1, y]);
    if (y - 1 >= 0 && image[x][y - 1] === color) queue.push([x, y - 1]);
    if (y + 1 < image[0].length && image[x][y + 1] === color)
      queue.push([x, y + 1]);
  }
  return image;
};
let image = [
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
  ],
  sr = 0,
  sc = 0,
  color = 0;
console.log(floodFill(image, sr, sc, color));
