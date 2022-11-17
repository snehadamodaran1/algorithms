/*
 * Given a stream of integers and window size, calculate the moving average of all integers n the sliding window.
 *
 * For example,
 *
 * MovingAverage m = new MovingAverage(3);
 * m.next(1) = 1
 * m.next(10) = (1 + 10) / 2
 * m.next(3) = (1 + 10 + 3) / 3
 * m.next(5) = (10 + 3 + 5) / 3
 *
 */

class MovingAverage {
  constructor(arrNum) {
    this.arr = [];
    this.arrNum = arrNum;
  }

  next(num) {
    var avg = 0;
    if (this.arr.length < this.arrNum) {
      this.arr.push(num);
      avg = this.findAvg();
    } else {
      this.arr.shift();
      this.arr.push(num);
      avg = this.findAvg();
    }
    console.log(avg.toFixed(1));
  }

  findAvg() {
    var average = 0,
      tot = 0;
    for (var i = 0; i < this.arr.length; i++) tot += this.arr[i];
    return (average = tot / this.arr.length);
  }
}

var m = new MovingAverage(3);

m.next(1);
m.next(10);
m.next(3);
m.next(5);
