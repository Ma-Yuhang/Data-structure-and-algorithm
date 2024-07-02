// 1.使用map
// var isHappy = function (n) {
//   const map = new Map()
//   while (true) {
//     if (map.has(n)) return false
//     if (n === 1) return true
//     map.set(n, 1)
//     n = getSum(n)
//   }
// }

// 2.使用set
var isHappy = function (n) {
  const set = new Set()
  while (true) {
    if (set.has(n)) return false
    if (n === 1) return true
    set.add(n)
    n = getSum(n)
  }
}

function getSum(n) {
  let sum = 0
  while (n) {
    sum += (n % 10) ** 2
    n = Math.floor(n / 10)
  }
  return sum
}
