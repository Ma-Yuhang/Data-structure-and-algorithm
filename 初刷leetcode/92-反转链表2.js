/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let curr = head
  let next = head
  let prev = null
  for (let i = 1; i < left; i++) {
    prev = curr
    curr = curr.next
  }

  let prev2 = prev
  let curr2 = curr

  for (let i = 0; i <= right - left; i++) {
    // next = curr.next
    // curr.next = prev
    // prev = curr
    // curr = next
    [curr.next, prev, curr] = [prev, curr, curr.next]
  }
  if (left > 1) {
    prev2.next = prev
  } else {
    head = prev
  }
  curr2.next = curr
  return head
};