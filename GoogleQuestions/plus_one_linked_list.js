function plusOne(head) {
  let len = 0;
  let current = head;
  var num = new Array();
  let total = 0;
  while (current) {
    num[len] = current.val;
    current = current.next;
    len++;
  }
  for (let i = 0; i < len; i++) {
    total = num[i](10 ** (len - 1 - i)) + total;
  }
  console.log(len, num, total, current, head);
  total = total + 1;
  if (Math.floor(total / (10 * len)) != 0) {
    len = len + 1;
    var node = new ListNode();
    node.next = head;
    head = node;
  }
  current = head;
  for (let i = 0; i < len; i++) {
    current.val = Math.floor(total / 10(len - 1 - i));
    total = total - current.val * 10 ** (len - 1 - i);
    current = current.next;
  }
  return head;
}
