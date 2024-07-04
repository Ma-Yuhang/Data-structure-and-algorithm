var canConstruct = (ransomNote, magazine) => {
  if (ransomNote.length > magazine.length) {
    return false
  }
  const map = new Map()
  for (const k of magazine) {
    map.set(k, (map.get(k) || 0) + 1)
  }
  for (const k of ransomNote) {
    if (!map.get(k)) {
      return false
    }
    map.set(k, map.get(k) - 1)
  }
  return true
}
