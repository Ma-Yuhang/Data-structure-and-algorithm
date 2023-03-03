// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
var spiralOrder = function (matrix) {
  let left = 0
  let right = matrix[0].length - 1
  let top = 0
  let bottom = matrix.length - 1
  let result = []
  let direction = 'right'
  while (left <= right && top <= bottom) {
    if (direction === 'right') {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i])
      }
      top++
      direction = 'down'
    } else if (direction === 'down') {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right])
      }
      right--
      direction = 'left'
    } else if (direction === 'left') {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom--
      direction = 'top'
    } else if (direction === 'top') {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
      left++
      direction = 'right'
    }
  };
  return result
}
console.log(spiralOrder(matrix));