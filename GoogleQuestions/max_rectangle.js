function printSumOfAllSquareMatrix(input) {
  for (var len = 1; len <= input.length; len++) {
    for (var i = 0; i < input.length - len + 1; i++) {
      for (var j = 0; j < input[i].length - len + 1; j++) {
        var sum = 0;
        for (var k = i; k < i + len; k++) {
          for (var m = j; m < j + len; m++) {
            sum += input[k][m];
          }
        }
        console.log("Start " + i + " " + j + " End " + len + " sum " + sum);
      }
    }
  }
}

function printSumOfAllRectangleMatrix(input) {
  for (var rlen = 1; rlen <= input.length; rlen++) {
    for (var clen = 1; clen <= input[0].length; clen++) {
      for (var i = 0; i < input.length - rlen + 1; i++) {
        for (var j = 0; j < input[i].length - clen + 1; j++) {
          var sum = 0;
          for (var k = i; k < i + rlen; k++) {
            for (var m = j; m < j + clen; m++) {
              sum += input[k][m];
            }
          }
          console.log(
            "Start " +
              i +
              " " +
              j +
              " End " +
              (i + rlen - 1) +
              " " +
              (j + clen - 1) +
              " sum " +
              sum
          );
        }
      }
    }
  }
}

var input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

printSumOfAllRectangleMatrix(input);
