//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  var prev = null;
  var next = null;
  var cur = head;
  while (cur !== null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};

function printList(node) {
  while (node != null) {
    console.log(node.data + " ");
    node = node.next;
  }
}

// Driver Code
var list = [1, 2, 3, 4, 5];
console.log(reverseList(list));

pre = null;
next = null;
while (cur != null) {}
