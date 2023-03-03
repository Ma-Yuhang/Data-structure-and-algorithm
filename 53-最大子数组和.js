/* 
  输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
  输出：6
  解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
*/
// 贪心算法
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
var maxSubArray = function (nums) {
  let max = nums[0]
  let prev = 0

  for (let i = 1; i < nums.length; i++) {
    prev = Math.max(nums[i] + prev, nums[i])
    max = Math.max(max, prev)
  }

  return max
};
// 动态规划算法
// var maxSubArray = function(nums) {
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i - 1] > 0) {
//       nums[i] += nums[i - 1]
//     }
//   }
//   console.log(nums);
//   return Math.max.apply(null, nums)
// };
console.log(maxSubArray(nums));