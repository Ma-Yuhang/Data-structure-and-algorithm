// 在链表类中实现这些功能：
// index始终代表下标（从0开始）
// get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
// addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
// addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
// addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
// deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
const { ListNode } = require('./ListNode')
class LinkedList {
  size = 0
  head = null

  _getNode(index) {
    if (index < 0 || index >= this.size) return null
    let cur = this.head
    for (let i = 0; i < index; i++) {
      cur = cur.next
    }
    return cur
  }
  // 获取某一个节点的数据
  get(index) {
    if (index < 0 || index >= this.size) return -1
    return this._getNode(index).val
  }
  // 加到第一个位置
  addAtHead(val) {
    const node = new ListNode(val, this.head)
    this.head = node
    this.size++
  }
  // 加入到最后
  addAtTail(val) {
    if (this.head === null) {
      this.head = new ListNode(val)
      this.size++
      return
    }
    let cur = this.head
    while (cur.next) {
      cur = cur.next
    }
    cur.next = new ListNode(val)
    this.size++
  }
  // 在指定位置添加节点
  addAtIndex(index, val) {
    if (index <= 0) {
      this.addAtHead(val)
      return
    }
    if (index > this.size) {
      return false
    }
    let cur = this._getNode(index - 1)
    const node = new ListNode(val, cur.next)
    cur.next = node
    this.size++
  }
  // 删除指定位置的节点
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
      return
    }
    if (index === 0) {
      // 如果是第一个就将head移到下一个
      // 如果是第一个同时又是最后一个，那么直接为null
      this.head = this.head?.next || null
      this.size--
      return
    }
    let cur = this._getNode(index - 1)

    cur.next = cur.next.next
    this.size--
  }
}

const list = new LinkedList()

list.addAtTail(3)
// list.addAtTail(4)
// list.addAtTail(5)
// list.addAtHead(2)
// list.addAtHead(1)
// list.addAtIndex(2, 4)
// list.deleteAtIndex(3)

console.log(list.deleteAtIndex(0))
console.dir(list, { depth: 10 })
