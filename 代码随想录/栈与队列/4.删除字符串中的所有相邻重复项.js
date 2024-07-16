// 方法一 使用栈
// var removeDuplicates = (s) => {
//   const stack = []
//   for (const v of s) {
//     if (v === stack[stack.length - 1]) {
//       stack.pop()
//     } else {
//       stack.push(v)
//     }
//   }
//   return stack.join('')
// }

// 方法二 双指针
var removeDuplicates = (s) => {
  s = [...s]
  let top = -1
  for (let i = 0; i < s.length; i++) {
    if (top === -1 || s[top] !== s[i]) {
      s[++top] = s[i]
    } else {
      top--
    }
  }
  s.length = top + 1
  return s.join('')
}
console.log(removeDuplicates('abbacs'))
