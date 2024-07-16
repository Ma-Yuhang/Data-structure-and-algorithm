// 使用队列实现栈的下列操作：

// push(x) -- 元素 x 入栈
// pop() -- 移除栈顶元素
// top() -- 获取栈顶元素
// empty() -- 返回栈是否为空

class MyStack {
  constructor() {
    this.queue1 = []
    this.queue2 = []
  }

  push(value) {
    this.queue1.push(value)
  }
  pop() {
    if (!this.queue1.length) {
      ;[this.queue1, this.queue2] = [this.queue2, this.queue1]
    }
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift())
    }
    return this.queue1.shift()
  }
  top() {
    const val = this.pop()
    this.queue2.push(val)
    return val
  }
  empty() {
    return this.queue1.length === 0 && this.queue2.length === 0
  }
}

const stack = new MyStack()
stack.push(1)
stack.push(2)
console.log(stack.top())
console.log(stack.pop())
console.log(stack.empty())
console.log(stack)
