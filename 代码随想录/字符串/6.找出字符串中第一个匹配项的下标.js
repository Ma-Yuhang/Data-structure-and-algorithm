const haystack = 'aabaabaaf'
const needle = 'aabaaf'

var strStr = function (haystack, needle) {
  const h = haystack.length
  const n = needle.length
  const next = getNext(needle)
  let j = 0
  for (let i = 0; i < h; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1]
    }
    if (haystack[i] === needle[j]) {
      j++
    }
    if (j === n) {
      return i - n + 1
    }
  }
  return -1
}

// 得到next数组(前缀表)
function getNext(s) {
  // 3种实现：1.直接将前缀表作为next数组。2.将前缀表统一右移。3.将前缀表统一减一
  // 初始化（这里使用方式1）
  let j = 0 // 前缀的末尾
  let next = []
  next[0] = j
  // i 代表后缀的末尾
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
console.log(getNext(needle))
