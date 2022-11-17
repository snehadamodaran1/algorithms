var removeNthFromEnd = function (head, n) {
  //initialization
  let slow = head,
    fast = head;
  //try to locate fast pointer to the n+1 th node
  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }

  if (!fast) {
    return head.next;
  }
  // the condition that fast == null, those won't go through the while loop
  // n is the length of the listnode, so you need to delete the first node
  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;

  return head;
};
