let nums = [1, 3, 5, 6]
let target = 4

// 暴力解法 
// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) {
//       return i
//     }
//   }
//   return nums.length
// };

// 二分法
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return right + 1
};
console.log(searchInsert(nums, target));