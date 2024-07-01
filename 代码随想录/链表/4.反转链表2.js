const { node, ListNode } = require('./ListNode')

// 只反转从left到right之间的节点
function reverse(head, left, right) {
  const dummyNode = new ListNode(-1, head)

  // 来到left的前一个节点
  let prev = dummyNode
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next
  }
  const cur = prev.next
  for (let i = 0; i < right - left; i++) {
    const next = cur.next
    cur.next = next.next
    next.next = prev.next
    prev.next = next
  }
  return dummyNode.next
}

console.dir(reverse(node, 2, 4), { depth: 10 })
