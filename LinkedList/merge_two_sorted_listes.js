var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode(0);
  let p1 = list1,
    p2 = list2,
    current = dummy;
  while (p1 && p2) {
    if (p1.val <= p2.val) {
      current.next = p1;
      p1 = p1.next;
    } else {
      current.next = p2;
      p2 = p2.next;
    }
    current = current.next;
  }
  current.next = p1 || p2;
  return dummy.next;
};
