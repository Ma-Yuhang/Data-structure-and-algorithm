/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths1 = function (m, n) {
  let result = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    result[i][0] = 1
  }
  for (let j = 0; j < n; j++) {
    result[0][j] = 1
  }
  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      result[row][col] = result[row][col - 1] + result[row - 1][col]
    }
  }
  return result[m - 1][n - 1]
};
console.log(uniquePaths1(3, 7));
// 递归解法 效率较低
var uniquePaths2 = function (m, n) {
  var cache = {}
  var dp = function (i, j) {
    if (i === 0 || j === 0) {
      return 1
    }
    var key = `${i}-${j}`
    // 避免重复求值
    if (cache[key]) {
      return cache[key]
    }
    return cache[key] = dp(i, j - 1) + dp(i - 1, j)
  }
  return dp(m - 1, n - 1)
};
console.log(uniquePaths2(3, 7));