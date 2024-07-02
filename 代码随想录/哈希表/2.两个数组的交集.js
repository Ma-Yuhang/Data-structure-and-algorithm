const nums1 = [2, 2, 3, 5, 17]
const nums2 = [2, 2, 6, 3]

var intersection = (nums1, nums2) => {
  return [...new Set(nums1)].filter((n) => new Set(nums2).has(n))
}

console.log(intersection(nums1, nums2))
