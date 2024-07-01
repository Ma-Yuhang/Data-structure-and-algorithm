const { node, ListNode } = require('./ListNode')

var deleteNode = (head, n) => {
  const dummyNode = new ListNode(0, head)

  let cur = head
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
console.dir(deleteNode(node, 2), { depth: 10 })
