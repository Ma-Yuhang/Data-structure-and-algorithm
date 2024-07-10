const { node } = require('../链表/ListNode')

var getIntersectionNode = (headA, headB) => {
  const lenA = getLength(headA)
  const lenB = getLength(headB)
  let curA = headA
  let curB = headB
  if (lenA > lenB) {
    const n = lenA - lenB
    for (let i = 0; i < n; i++) {
      curA = curA.next
    }
  } else {
    const n = lenB - lenA
    for (let i = 0; i < n; i++) {
      curB = curB.next
    }
  }
  while (curA && curA !== curB) {
    curA = curA.next
    curB = curB.next
  }
  return curA
}

function getLength(head) {
  let i = 0
  while (head) {
    head = head.next
    i++
  }
  return i
}

console.log(getLength(node))
