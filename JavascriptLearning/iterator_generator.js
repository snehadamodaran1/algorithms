// Iterators are like advanced loops that can be paused.
// next() function, which returns the value and the done status.
//  The value field is the value in the array at a given index.
//  done is the boolean value that returns the status of completion for the iteration through the loop.

function fruitIter(fruits) {
  let index = 0;
  return {
    next: function () {
      return index < fruits.length
        ? { value: fruits[index++], done: false }
        : { done: true };
    },
  };
}
let fruits = fruitIter(["Apple", "Mango", "Banana"]);

console.log(fruits.next());

// Generators are similar to Iterators but they return multiple values.
//  These values are called yield values.
// Generator functions are written using the function* syntax. * denotes that it's not a normal function, but a generator.

function* printFruits() {
  yield "Mango";
  yield "Grapes";
  yield "Banana";
}

const fruit = printFruits();
console.log(fruits.next());
console.log(fruits.next());
