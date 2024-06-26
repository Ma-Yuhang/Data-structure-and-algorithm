let num = 10 // 十进制的数字
let n = 2  // 转化成n进制
function fn(num, n) {
  let arr = [];
  while (num != 0) {
    arr.unshift(num % n);
    num = Math.floor(num / n);
  }
  // arr.reverse();
  return arr.join('');
}
console.log(fn(num, n));