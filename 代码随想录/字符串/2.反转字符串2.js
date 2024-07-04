var reverseStr = (s, k) => {
  let len = s.length
  let resArr = s.split('')
  for (let i = 0; i < len; i += 2 * k) {
    let l = i
    let r = Math.min(i + k - 1, len - 1)
    while (l < r) {
      ;[resArr[l], resArr[r]] = [resArr[r], resArr[l]]
      l++
      r--
    }
  }
  return resArr.join('')
}

console.log(reverseStr('abcdefg', 2))
