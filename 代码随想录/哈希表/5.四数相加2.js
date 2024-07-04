var fourSumCount = (nums1, nums2, nums3, nums4) => {
  const map = new Map()
  let count = 0
  for (const n1 of nums1) {
    for (const n2 of nums2) {
      const sum = n1 + n2
      map.set(sum, (map.get(sum) || 0) + 1)
    }
  }
  for (const n3 of nums3) {
    for (const n4 of nums4) {
      const sum = n3 + n4
      count += map.get(0 - sum) || 0
    }
  }
  return count
}
