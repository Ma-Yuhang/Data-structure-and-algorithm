// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
let roman = 'IV' // 4
var romanToInt = function (s) {
  const map = new Map()
  map.set('I', 1)
  map.set('V', 5)
  map.set('X', 10)
  map.set('L', 50)
  map.set('C', 100)
  map.set('D', 500)
  map.set('M', 1000)
  let length = s.length
  let res = 0
  for (let i = 0; i < length; i++) {
    let value = map.get(s[i])
    if (i < length - 1 && value < map.get(s[i + 1])) {
      res -= value
    } else {
      res += value
    }
  }
  return res
};
console.log(romanToInt(roman));