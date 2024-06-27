// 输入：nums = [-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]
const nums = [-4, -1, 0, 3, 10]
function sortedSquares(nums) {
  const res = new Array(nums.length).fill(0)
  let i = 0,
    j = nums.length - 1,
    k = nums.length - 1
  while (i <= j) {
    let left = nums[i] ** 2
    let right = nums[j] ** 2
    if (left < right) {
      res[k] = right
      k--
      j--
    } else {
      res[k] = left
      k--
      i++
    }
  }
  return res
}

console.log(sortedSquares(nums));
