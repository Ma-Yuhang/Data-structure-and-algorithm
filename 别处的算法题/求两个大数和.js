let a = '5786786567576578423423423'
let b = '6757587698456788425464564'

function sum(a, b) {
  let result = ''
  maxLen = Math.max(a.length, b.length)
  a = a.padStart(maxLen, '0')
  b = b.padStart(maxLen, '0')
  let curry = 0 // 存储进位
  for (let i = maxLen - 1; i >= 0; i--) {
    let n = +a[i] + +b[i] + curry
    curry = Math.floor(n / 10)
    result = (n % 10) + result
  }
  if (curry) result = '1' + result
  return result
}
console.log(sum(a, b));

// 使用BigInt数据类型
let c = BigInt('5786786567576578423423423')
let d = BigInt('6757587698456788425464564')

console.log(c + d);