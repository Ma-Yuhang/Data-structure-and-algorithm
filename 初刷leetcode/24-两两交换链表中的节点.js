/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]

/* 
  在链表中交换两个节点
  let n1 = current.next
  let n2 = current.next.next
  current.next = n2
  n1.next = n2.next
  n2.next = n1
  current = n1 
*/
var swapPairs = function (head) {
  let dummy = new ListNode()
  dummy.next = head
  let current = dummy
  while (current.next && current.next.next) {
    let n1 = current.next
    let n2 = current.next.next
    current.next = n2
    n1.next = n2.next
    n2.next = n1
    current = n1
  }
  return dummy.next
};