/**
 * @param {number[]} nums
 * @return {boolean}
 */
/* 
  输入：nums = [2,3,0,0,4]
  输出：true
  解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
*/
const nums = [2, 3, 0, 0, 4]
// 贪心算法
var canJump = function (nums) {
  const length = nums.length
  let position = length - 1
  for (let i = length - 2; i >= 0; i--) {
    if (i + nums[i] >= position) {
      position = i
    }
  }
  return position === 0 ? true : false
};
// var canJump = function (nums) {
//   const length = nums.length
//   const memo = Array(length).fill(0)
//   memo[length - 1] = 1

//   for (let i = length - 2; i >= 0; i--) {
//     const maxJump = Math.min(i + nums[i], length - 1)
//     for (let j = i + 1; j <= maxJump; j++) {
//       if(memo[j] === 1) {
//         memo[i] = 1
//         break
//       }
//     }
//   }
//   return memo[0] === 1 ? true : false
// };
console.log(canJump(nums));