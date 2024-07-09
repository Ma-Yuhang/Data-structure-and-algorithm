// 方法一 s + s 然后去掉首尾字符之后 看是否出现了s
// var repeatedSubstringPattern = function (s) {
//   // 拼接出来一个新的字符串
//   let str = s + s
//   // 去掉首字符和尾字符，看还能不能出现一个s
//   str = str.slice(1, -1)
//   return str.includes(s)
// }

// 方法二 KMP算法
var repeatedSubstringPattern = function (s) {
  
  let next = getNext(s)
  if (s.length % (s.length - next[s.length - 1]) === 0 && next[s.length - 1] !== 0) {
    return true
  }
  return false
}

// 得到next数组
function getNext(s) {
  let next = new Array(s.length).fill(0)
  let j = 0
  for (let i = 1; i < s.length; i++) {
    while (j > 0 && s[i] !== s[j]) {
      j = next[j - 1]
    }
    if (s[i] === s[j]) {
      j++
    }
    next[i] = j
  }

  return next
}
console.log(repeatedSubstringPattern('aba'))
