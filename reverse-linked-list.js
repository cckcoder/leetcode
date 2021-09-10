const reverseList = function (head) {
  let cur = head;
  let prev = null;
  let next = null;

  while (cur !== null) {
    next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
};

let head = [1, 2, 3, 4, 5];
reverseList(head);
