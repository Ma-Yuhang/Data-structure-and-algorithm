const { ListNode, node } = require('../链表/ListNode')
var swapPairs = (head) => {
  const dummyNode = new ListNode(-1, head)
  let pre = dummyNode
  let cur = dummyNode.next
  while (cur && cur.next) {
    const next = cur.next
    pre.next = next
    cur.next = next.next
    next.next = cur
    pre = cur
    cur = pre.next
  }
  return dummyNode.next
}

console.dir(swapPairs(node), { depth: 10 })
