// 使用栈实现队列的下列操作：

// push(x) -- 将一个元素放入队列的尾部。
// pop() -- 从队列首部移除元素。
// peek() -- 返回队列首部的元素。
// empty() -- 返回队列是否为空。

class MyQueue {
  constructor() {
    this.inStack = []
    this.outStack = []
  }
  push(value) {
    this.inStack.push(value)
  }
  pop() {
    if (!this.outStack.length) {
      this._in2out()
    }
    return this.outStack.pop()
  }
  peek() {
    if (!this.outStack.length) {
      this._in2out()
    }
    return this.outStack[this.outStack.length - 1]
  }
  empty() {
    return this.outStack.length === 0 && this.inStack.length === 0
  }
  _in2out() {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop())
    }
  }
}

const queue = new MyQueue()
queue.push(1)
queue.push(2)
console.log(queue.peek()) // 返回 1
console.log(queue.pop()) // 返回 1
console.log(queue.empty()) // 返回 false
console.log(queue)
