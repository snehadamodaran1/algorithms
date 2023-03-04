var middleNode = function (head) {
  let slow = head;
  let fast = head.next;
  while (fast !== null && fast.next !== null) {
    // if you have to check 2 condition put it in an AND and put the first one with the safer one
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast !== null && fast.next == null) {
    slow = slow.next;
  }
  return slow;
};
