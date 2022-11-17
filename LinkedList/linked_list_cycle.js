var hasCycle = function (head) {
  if (head == null) return false;
  var linkset = new Set();
  cur = head;
  while (cur) {
    if (linkset.has(cur)) return cur;
    linkset.add(cur);
    cur = cur.next;
  }
  return false;
};
