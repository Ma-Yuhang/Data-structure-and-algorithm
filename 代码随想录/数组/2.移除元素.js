// 给定 nums = [0, 1, 3, 2, 3, 0, 4, 2], val = 3, 函数应该返回新的长度 6,
// 并且 nums 中的前五个元素为 0, 1, 3, 0, 4, 可以不保证顺序。
// 你不需要考虑数组中超出新长度后面的元素

// 数组的元素在内存地址中是连续的，不能单独删除数组中的某个元素，只能覆盖。

const nums = [0, 1, 3, 2, 3, 0, 4, 2]

// 双指针优化
function removeElement(nums, val) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right]
      right--
    } else {
      left++
    }
  }
  console.log(nums)
  // 最终数组为：[0, 1, 2, 2, 4, 0, 4, 2]
  return left + 1
}

// 双指针
// function removeElement(nums, val) {
//   let left = 0
//   for (let right = 0; right < nums.length; right++) {
//     if (nums[right] !== val) {
//       nums[left] = nums[right]
//       left++
//     }
//   }
//   // 数组最终变成了 [0, 1, 2, 0, 4, 2, 4, 2]
//   return left
// }

// 暴力解法
// function removeElement(nums, val) {
//   let length = nums.length
//   for (let i = 0; i < length; i++) {
//     // 发现相等的，数组集体向前移一位
//     if (nums[i] === val) {
//       for (let j = i + 1; j < length; j++) {
//         nums[j - 1] = nums[j]
//       }
//       i--
//       length--
//     }
//   }
//   // 数组最终变成了 [0, 1, 2, 0, 4, 2, 2, 2]
//   return length
// }

console.log(removeElement(nums, 3))
