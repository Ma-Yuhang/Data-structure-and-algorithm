var detectCycle = (head) => {
  if (head === null || head.next === null) {
    return null
  }
  let slow = head.next
  let fast = head.next.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      slow = head
      while (slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }
  return null
}
