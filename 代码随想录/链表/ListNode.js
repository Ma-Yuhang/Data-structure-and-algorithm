class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

module.exports = {
  node: node1,
  ListNode,
}
