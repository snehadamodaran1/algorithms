const { customRef } = require("vue");

//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// var reorderList = function (head) {
//   if (!head || !head.next) return;
//   // get to the middle of the list
//   let slow = head;
//   let fast = head;

//   while (fast.next && fast.next.next) {
//     fast = fast.next.next;
//     slow = slow.next;
//   }

//   // slow is middle
//   // reverse linkedlist from middle to end
//   let middle = slow;
//   let cur = slow.next;

//   // Reverse the half after middle  1->2->3->4->5->6 to 1->2->3->6->5->4
//   while (cur.next) {
//     let next = cur.next;
//     cur.next = next.next;
//     next.next = middle.next;
//     middle.next = next;
//   }

//   //Start reorder one by one  1->2->3->6->5->4 to 1->6->2->5->3->4
//   let p1 = head;
//   let p2 = middle.next;

//   while (p1 !== middle) {
//     let p1Next = p1.next;
//     let p2Next = p2.next;

//     p1.next = p2;
//     p2.next = p1Next;
//     middle.next = p2Next;

//     p1 = p1Next;
//     p2 = p2Next;
//   }
// };

var reorderList = function (head) {
  if (!head || !head.next) return;
  var slow = head,
    fast = head;
  while (slow.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  middle = slow;
  let cur = slow.next;
  while (cur.next) {
    let next = cur.next;
    cur.next = next.next;
    next.next = middle.next; //check once
    middle.next = next;
  }
  //Start reorder one by one  1->2->3->6->5->4 to 1->6->2->5->3->4
  let p1 = head;
  let p2 = middle.next;

  while (p1 !== middle) {
    let p1Next = p1.next;
    let p2Next = p2.next;

    p1.next = p2;
    p2.next = p1Next;
    middle.next = p2Next;

    p1 = p1Next;
    p2 = p2Next;
  }
};
var head = [1, 2, 3, 4, 5];
console.log(reorderList(head));
