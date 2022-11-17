var Solution = function (head) {
  this.head = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  const size = this.size();
  const random = Math.floor(Math.random() * size);
  let count = 0,
    currentNode = this.head;
  while (currentNode) {
    if (count === random) {
      return currentNode.val;
    }
    count++;
    currentNode = currentNode.next;
  }
};

Solution.prototype.size = function () {
  let result = 0,
    currentNode = this.head;
  while (currentNode) {
    result++;
    currentNode = currentNode.next;
  }
  return result;
};
