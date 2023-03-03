/**
 * @param {number} n
 * @return {number[][]}
 */
/* 
  输入：n = 3
  输出：[[1,2,3],[8,9,4],[7,6,5]]
*/
let n = 3
var generateMatrix = function (n) {
  let num = 1
  let left = 0, right = n - 1, top = 0, bottom = n - 1
  let result = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let direction = 'right'
  while (left <= right && top <= bottom) {
    if (direction === 'right') {
      for (let i = left; i <= right; i++) {
        result[top][i] = num
        num++
      }
      top++
      direction = 'down'
    } else if (direction === 'down') {
      for (let i = top; i <= bottom; i++) {
        result[i][right] = num
        num++
      }
      right--
      direction = 'left'
    } else if (direction === 'left') {
      for (let i = right; i >= left; i--) {
        result[bottom][i] = num
        num++
      }
      bottom--
      direction = 'top'
    } else if (direction === 'top') {
      for (let i = bottom; i >= top; i--) {
        result[i][left] = num
        num++
      }
      left++
      direction = 'right'
    }
  }
  return result
};
console.log(generateMatrix(n));