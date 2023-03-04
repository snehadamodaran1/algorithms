class stackArray {
  constructor() {
    this.stack = [];
  }
  stackPop() {
    if (this.stack.length === 0) console.log("Stack empty");
    else {
      return this.stack.pop();
    }
  }
  stackPush(val) {
    this.stack.push(val);
  }
  print() {
    console.log(this.stack);
  }
}

var st1 = new stackArray();
st1.stackPush(1);
st1.stackPush(2);
st1.print();
st1.stackPop();
st1.print();
st1.stackPop();
st1.print();
st1.stackPop();
