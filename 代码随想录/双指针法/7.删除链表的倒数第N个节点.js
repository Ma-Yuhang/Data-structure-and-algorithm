const { ListNode, node } = require('../链表/ListNode')
var fn = (head, n) => {
  const dummyNode = new ListNode(-1, head)
  let cur = dummyNode.next
  let i = 0
  let pre = dummyNode
  while (cur.next) {
    cur = cur.next
    i++
    if (i >= n) {
      pre = pre.next
    }
  }
  pre.next = pre.next.next
  return dummyNode.next
}

console.dir(fn(node, 3), { depth: 10 })
