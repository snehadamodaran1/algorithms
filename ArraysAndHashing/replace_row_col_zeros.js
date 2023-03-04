// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
let Qstn = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
// let result = [[0,0,0,0],[0,0,0,0],[0,0,0,0]]
let row = [];
let col = [];

for (let i = 0; i < Qstn.length; i++) {
  for (let j = 0; j < Qstn[0].length; j++) {
    if (Qstn[i][j] === 0) {
      row[i] = 0;
      col[j] = 0;
    }
  }
}
for (let i = 0; i < Qstn.length; i++) {
  for (let j = 0; j < Qstn[0].length; j++) {
    if (row[i] == 0) {
      Qstn[i][j] = 0;
    }
    if (col[j] == 0) {
      Qstn[i][j] = 0;
    }
  }
}

console.log(row, col, Qstn);
