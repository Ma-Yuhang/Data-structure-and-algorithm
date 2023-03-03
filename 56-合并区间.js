/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
/* 
  输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
  输出：[[1,6],[8,10],[15,18]]
  解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
*/
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
var merge = function (intervals) {
  if (intervals.length <= 1) {
    return intervals
  }

  intervals.sort((a, b) => {
    return a[0] - b[0]
  })

  let curr = intervals[0]
  let result = []
  for (const interval of intervals) {
    if (curr[1] >= interval[0]) {
      curr[1] = Math.max(curr[1], interval[1])
    } else {
      result.push(curr)
      curr = interval
    }
  }
  if (curr.length !== 0) {
    result.push(curr)
  }
  return result
};
console.log(merge(intervals));