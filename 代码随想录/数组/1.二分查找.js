const arr = [-1, 0, 3, 5, 9, 12]

var search = function (nums, target) {
  // right是数组最后一个数的下标，num[right]在查找范围内，是左闭右闭区间
  let mid = 0
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    mid = parseInt((left + right) / 2)
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
console.log(search(arr, 5))
