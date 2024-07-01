const { node, ListNode } = require('./ListNode')

// 方法一：递归
var swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head
  }
  const nextNode = head.next
  head.next = swapPairs(nextNode.next)
  nextNode.next = head
  return nextNode
}

// 方法二：迭代
// var swapPairs = function (head) {
//   const dummyNode = new ListNode(0, head)
//   let pre = dummyNode
//   let cur = dummyNode.next
//   while (cur && cur.next) {
//     const next = cur.next
//     pre.next = next
//     cur.next = cur.next.next
//     next.next = cur
//     pre = cur
//     cur = cur.next
//   }
//   return dummyNode.next
// }

console.dir(swapPairs(node), { depth: 10 })
