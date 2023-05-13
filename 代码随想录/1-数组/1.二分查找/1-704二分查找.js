let nums = [1, 3, 5, 8, 23, 32, 34]
let target = 34 // 目标值 没找到就返回-1

function Solution(nums, target) {
  let left = 0, mid = 0, right = nums.length - 1
  while (left <= right) {
    mid = Math.floor((left + right) / 2) // mid = 3 right = 2 mid = 1 left = 2
    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
}
console.log(Solution(nums, target));