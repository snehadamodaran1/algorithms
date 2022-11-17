// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.min = Infinity;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.min = Math.min(this.min, x);
  this.stack.push({ val: x, min: this.min }); //maintaining min so that if popped we can get back the min in 1 shot
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  if (this.stack.length > 0) {
    this.min = this.stack[this.stack.length - 1].min;
  } else {
    this.min = Infinitiy;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
