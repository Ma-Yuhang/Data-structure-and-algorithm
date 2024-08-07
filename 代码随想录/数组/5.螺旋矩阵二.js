// 官方题解 定义上下左右
// n行n列
// var generateMatrix = function (n) {
//   let num = 1
//   let left = 0,
//     right = n - 1,
//     top = 0,
//     bottom = n - 1
//   let result = new Array(n).fill(0).map(() => new Array(n).fill(0))
//   while (num <= n ** 2) {
//     // 从左往右
//     for (let i = left; i <= right; i++) result[top][i] = num++
//     top++
//     // 从上往下
//     for (let i = top; i <= bottom; i++) result[i][right] = num++
//     right--
//     // 从右往左
//     for (let i = right; i >= left; i--) result[bottom][i] = num++
//     bottom--
//     // 从下往上
//     for (let i = bottom; i >= top; i--) result[i][left] = num++
//     left++
//   }
//   return result
// }

// 2.定义循环圈数
// var generateMatrix = function (n) {
//   let startX = 0,
//     startY = 0 // 起始位置
//   let loop = Math.floor(n / 2) // 循环圈数
//   let mid = Math.floor(n / 2) // 如果 n 是奇数，则代表最中间的位置
//   let offset = 1 // 每一层填充元素个数（上下左右全部保持左闭右开）
//   let count = 1 // 填充数字
//   let res = new Array(n).fill(0).map(() => new Array(n).fill(0)) // 空二维数组
//   while (loop) {
//     let row = startX,
//       col = startY
//     // 从左到右
//     for (; col < n - offset; col++) {
//       res[row][col] = count++
//     }
//     // 右边从上往下
//     for (; row < n - offset; row++) {
//       res[row][col] = count++
//     }
//     // 下边从右往左
//     for (; col > startX; col--) {
//       res[row][col] = count++
//     }
//     // 左边从下往上
//     for (; row > startY; row--) {
//       res[row][col] = count++
//     }
//     // 循环一轮后
//     startX++
//     startY++
//     loop--
//     offset++
//   }
//   if (n % 2 !== 0) {
//     res[mid][mid] = count
//   }
//   return res
// }

// m行n列
var generateMatrix = function (m, n) {
  let num = 1
  let row = 0
  let col = 0
  let stepRow = 0
  let stepCol = 1
  let result = new Array(m).fill(0).map(() => new Array(n).fill(0))
  function _isBlock() {
    return !result[row + stepRow] || result[row + stepRow][col + stepCol] !== 0
  }
  while (num <= m * n) {
    result[row][col] = num++
    // 如果遇到阻碍了，就拐弯
    if (_isBlock()) {
      // 如果之前是横向的，那么拐弯过后
      if (stepRow === 0) {
        stepRow = stepCol
        stepCol = 0
      } else {
        stepCol = -stepRow
        stepRow = 0
      }
    }
    row += stepRow
    col += stepCol
  }
  return result
}
console.log(generateMatrix(3, 4))
