/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
/* 
  输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
  输出：2
  解释：3x3 网格的正中间有一个障碍物。
*/
const obstacleGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
var uniquePathsWithObstacles = function (obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                // 不是障碍物
                if (i === 0) {
                    // 取左边的值
                    obstacleGrid[i][j] = obstacleGrid[i][j - 1] ?? 1;
                } else if (j === 0) {
                    // 取上边的值
                    obstacleGrid[i][j] = obstacleGrid[i - 1][j];
                } else {
                    // 取左边和上边的和
                    obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
                }
            } else {
                // 如果是障碍物，则路径为0
                obstacleGrid[i][j] = 0;
            }
        }
    }
    return obstacleGrid[m - 1][n - 1];
};
console.log(uniquePathsWithObstacles(obstacleGrid));