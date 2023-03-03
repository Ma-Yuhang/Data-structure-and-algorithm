// 一次循环完成
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode()
  dummy.next = head
  let n1 = dummy
  let n2 = dummy
  for (let i = 0; i <= n; i++) {
      n1 = n1.next
  }

  while (n1 !== null) {
      n1 = n1.next
      n2 = n2.next
  }
  n2.next = n2.next.next
  return dummy.next
};

// 两次循环完成
// var removeNthFromEnd = function (head, n) {
//   let node = head
//   let length = 0
//   while (node) {
//       length++
//       node = node.next
//   }
//   console.log(length)
//   let current = head
//   let position = length - n
//   if (position === 0) {
//       current = current.next
//       head = current
//   } else {
//       let index = 0
//       let previous = null
//       while (index++ < position) {
//           previous = current
//           current = current.next
//       }
//       previous.next = current.next
//   }
//   return head
// };