// 使用二分查找
let nums = [-2,-1, 0, 3, 5, 9, 12], target = 0

// 第一种写法（左闭右闭）常用
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
};

// 第二种写法（左闭右开）
// var search = function (nums, target) {
//   let left = 0
//   let right = nums.length
//   while(left < right) {
//     let mid = Math.floor((left + right) / 2)
//     if (nums[mid] === target) {
//       return mid
//     } else if (nums[mid] < target) {
//       left = mid + 1
//     } else {
//       right = mid
//     }
//   }
//   return -1
// };
console.log(search(nums, target));