const nums = [2,3,1,2,4,3]


// 滑动窗口解法
var minSubArrayLen = function(s, nums) {
  let i = 0
  let sum = 0
  let result = Number.MAX_SAFE_INTEGER
  let subLength = 0
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j]
    while(sum >= s) {
      subLength = j - i + 1
      result = Math.min(result, subLength)
      sum -= nums[i]
      i++
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result
};


// 暴力解法
// var minSubArrayLen = function(s, nums) {
//   let result = Number.MAX_SAFE_INTEGER; // 最终的结果
//   let sum = 0; // 子序列的数值之和
//   let subLength = 0; // 子序列的长度
//   for (let i = 0; i < nums.length; i++) { // 设置子序列起点为i
//       sum = 0;
//       for (let j = i; j < nums.length; j++) { // 设置子序列终止位置为j
//           sum += nums[j];
//           if (sum >= s) { // 一旦发现子序列和超过了s，更新result
//               subLength = j - i + 1; // 取子序列的长度
//               result = Math.min(result, subLength);
//               break; // 因为我们是找符合条件最短的子序列，所以一旦符合条件就break
//           }
//       }
//   }
//   // 如果result没有被赋值的话，就返回0，说明没有符合条件的子序列
//   return result === Number.MAX_SAFE_INTEGER ? 0 : result;
// };

console.log(minSubArrayLen(7, nums));