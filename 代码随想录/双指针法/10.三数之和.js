const arr = [-1, 0, 1, 2, -1, -4]

var threeSum = (nums) => {
  nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1
    let r = nums.length - 1
    if (nums[i] > 0) break
    if (nums[i] === nums[i - 1]) continue
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1]) {
          l++
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--
        }
        l++
        r--
      } else if (sum < 0) {
        l++
      } else {
        r--
      }
    }
  }
  return res
}
console.log(threeSum(arr))
