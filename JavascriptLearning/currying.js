// by using bind -  making 1 variable constantly bound to the function

let multiply = function (x, y) {
  return x * y;
};

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(5));
//or
let multiplyByThree = multiply.bind(this);
console.log(multiplyByThree(3, 6));

// by using closure-------------------------------------------------------------

let multiplying = function (x) {
  return function (y) {
    return x * y;
  };
};

let multiplyingByTwo = multiplying(2);
console.log(multiplyByTwo(3));

function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
console.log(sum(1)(2)(3));
