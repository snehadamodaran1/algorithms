// Solution 1: Append the minimum node at each round
var mergeKLists = function (lists) {
  const dummyHead = new ListNode();
  let curr = dummyHead;

  function findMin(arr) {
    let min = Infinity;

    for (let node of arr) {
      if (!node) continue;
      min = Math.min(min, node.val);
    }
    return min;
  }

  while (true) {
    const min = findMin(lists);
    if (min === Infinity) return dummyHead.next;

    for (let i = 0; i < lists.length; i++) {
      if (!lists[i] || lists[i].val > min) continue;
      curr.next = lists[i];
      curr = curr.next;
      lists[i] = lists[i].next;
    }
  }
};

// Solution 2: Divide and conquer
var mergeKLists = function (lists) {
  if (!lists.length) return null;

  function merge(left, right) {
    if (!left) return right;
    if (!right) return left;

    if (left.val < right.val) {
      left.next = merge(left.next, right);
      return left;
    }
    right.next = merge(left, right.next);
    return right;
  }

  function recurse(start, end) {
    if (start === end) return lists[start];
    const mid = Math.floor((start + end) / 2);
    const left = recurse(start, mid);
    const right = recurse(mid + 1, end);
    return merge(left, right);
  }
  return recurse(0, lists.length - 1);
};

// Solution 3: Merge 2 lists at a time
var mergeKLists = function (lists) {
  if (!lists.length) return null;

  function mergeTwoLists(a, b) {
    const dummyHead = new ListNode();
    let curA = a,
      curB = b,
      curD = dummyHead;

    while (curA && curB) {
      if (curA.val < curB.val) {
        curD.next = curA;
        curA = curA.next;
      } else {
        curD.next = curB;
        curB = curB.next;
      }
      curD = curD.next;
    }
    if (curA) curD.next = curA;
    if (curB) curD.next = curB;
    return dummyHead.next;
  }

  while (lists.length > 1) {
    const a = lists.shift();
    const b = lists.shift();
    const res = mergeTwoLists(a, b);
    lists.push(res);
  }
  return lists[0];
};
