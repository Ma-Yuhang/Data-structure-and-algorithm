const arr = ['h', 'e', 'l', 'l', 'o']

var reverse = (arr) => {
  let l = 0
  let r = arr.length - 1
  while (l < r) {
    ;[arr[l], arr[r]] = [arr[r], arr[l]]
    l++
    r--
  }
  return arr
}

console.log(reverse(arr))
