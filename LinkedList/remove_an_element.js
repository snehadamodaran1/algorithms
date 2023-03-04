/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let node = head;
  prev = node;
  while (node != null && node.next != null) {
    if (node.val == n) {
      let temp = node.next;
      node.next = prev;
      prev = temp;
      break;
    }
    prev = node;
    node = node.next;
  }
  return head;
};
