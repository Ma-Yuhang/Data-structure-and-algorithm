// 1.使用哈希表 new set

var detectCycle = (head) => {
  const visited = new Set()
  while (head) {
    if (visited.has(head)) {
      return head
    }
    visited.add(head)
    head = head.next
  }
  return null
}
// 2.快慢指针
// 快指针一次走两步，慢指针一次走一步，那么必定会在环中相遇，
// 此时，让一个节点回到起点，一个节点在相遇点，两个节点每次都走一步，那么必定会刚好在环的入口点相遇
var detectCycle = function (head) {
  if (head === null || head.next === null) {
    return null
  }
  let slow = head.next
  let fast = head.next.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      // 如果两个节点相遇，那么一个节点从起点开始，一个节点从相遇点开始，
      // 一次走一步，一定刚好在环的入口点相遇
      slow = head
      while (slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      // 走到这，一定已经相遇了，并且此点就是环的入口点
      return slow
    }
  }
  return null
}
