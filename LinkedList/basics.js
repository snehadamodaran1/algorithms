// function createNode(value) {
//   return {
//     value: value,
//     next: null,
//   };
// }
// let newNode = createNode("Hello");

// console.log(newNode);
// // { value: 'Hello', next: null }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let newNode = new Node("World");
console.log(newNode);
