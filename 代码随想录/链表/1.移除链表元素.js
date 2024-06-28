const { node, ListNode } = require('./ListNode')

// 题意：删除链表中等于给定值 val 的所有节点。
// 示例 1： 输入：head = [1,2,6,3,4,5,6], val = 6 输出：[1,2,3,4,5]
// 示例 2： 输入：head = [], val = 1 输出：[]
// 示例 3： 输入：head = [7,7,7,7], val = 7 输出：[]

var removeElements = function (head, val) {
  const dummyNode = new ListNode(-1)
  dummyNode.next = head
  let cur = dummyNode
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
      continue
    }
    cur = cur.next
  }
  return dummyNode.next
}

console.log(removeElements(node, 2))
