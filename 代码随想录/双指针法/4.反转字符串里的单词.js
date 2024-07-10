var reverseWords = (s) => {
  let strArr = Array.from(s)
  // 1.去除多余空格
  strArr = removeExtraSpaces(strArr)
  // 2.反转整个字符串
  strArr = reverse(strArr, 0, strArr.length - 1)
  // 3.反转单词
  let start = 0
  for (let i = 0; i <= strArr.length; i++) {
    if(strArr[i] === ' ' || i === strArr.length) {
      strArr = reverse(strArr, start, i - 1)
      start = i + 1
    }
  }
  console.log(strArr, 'aaaaaa');
  return strArr.join('')
}

// 跟移除元素很像
function removeExtraSpaces(arr) {
  let slow = 0
  let fast = 0
  while(fast < arr.length) {
    if(arr[fast] === ' ' && (fast === 0 || arr[fast - 1] === ' ')) {
      fast++
    }else {
      arr[slow] = arr[fast]
      slow++
      fast++
    }
  }
  arr.length = arr[slow - 1] === ' ' ? slow - 1 : slow
  return arr
}

// 反转字符串
function reverse(arr, start, end) {
  while(start < end) {
    ;[arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
  }
  return arr
}
console.log(reverseWords('  hello world '));