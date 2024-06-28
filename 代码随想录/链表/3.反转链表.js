const { node } = require('./ListNode')

function reverse(head) {
  let pre = null
  let cur = head
  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  return pre
}

console.dir(reverse(node), { depth: 10 })
