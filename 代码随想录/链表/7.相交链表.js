const { node } = require('./ListNode')

var getIntersectionNode = (headA, headB) => {
  let lenA = getLength(headA)
  let lenB = getLength(headB)
  let n = 0
  let curA = headA
  let curB = headB
  if (lenA > lenB) {
    n = lenA - lenB
    // 让curA和curB来到同一起点
    for (let i = 0; i < n; i++) {
      curA = curA.next
    }
  } else {
    n = lenB - lenA
    // 让curA和curB来到同一起点
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
  let len = 0
  while (head) {
    head = head.next
    len++
  }
  return len
}

console.log(getLength(node))
