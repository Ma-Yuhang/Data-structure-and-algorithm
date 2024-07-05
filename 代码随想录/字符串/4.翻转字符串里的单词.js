// 3步
// 1:去掉多余空格
// 2:反转整个字符串
// 3:反转单词
var reverseWords = function (s) {
  let strArr = Array.from(s)
  // 去掉多余空格
  strArr = removeExtraSpaces(strArr)
  // 反转整个字符串
  strArr = reverse(strArr, 0, strArr.length - 1)
  // 再把单词反转回来
  let start = 0
  for (let i = 0; i <= strArr.length; i++) {
    if (strArr[i] === ' ' || i === strArr.length) {
      strArr = reverse(strArr, start, i - 1)
      start = i + 1
    }
  }
  return strArr.join('')
}

function removeExtraSpaces(strArr) {
  // 快慢指针
  // 遇到多余空格快指针++
  // 不是多余的空格，让slow等于fast的值，然后快慢指针同时加1
  let slow = 0
  let fast = 0
  while (fast < strArr.length) {
    // 满足一下条件就是多余的空格
    if (strArr[fast] === ' ' && (fast === 0 || strArr[fast - 1] === ' ')) {
      fast++
    } else {
      strArr[slow] = strArr[fast]
      slow++
      fast++
    }
  }
  // 然后处理长度问题
  strArr.length = strArr[slow - 1] === ' ' ? slow - 1 : slow
  return strArr
}

function reverse(strArr, start, end) {
  while (start < end) {
    ;[strArr[start], strArr[end]] = [strArr[end], strArr[start]]
    start++
    end--
  }
  return strArr
}
console.log(reverseWords('hello world!'))
