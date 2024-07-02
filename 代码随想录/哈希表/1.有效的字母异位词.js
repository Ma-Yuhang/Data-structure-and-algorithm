const s = 'asjkhdfb'
const t = 'askjhdbf'

var fn = (s, t) => {
  if (s.length !== t.length) {
    return false
  }
  const map = new Map()

  for (const k of s) {
    map.set(k, (map.get(k) || 0) + 1)
  }
  for (const k of t) {
    if (!map.get(k)) {
      return false
    }
    map.set(k, map.get(k) - 1)
  }
  return true
}
console.log(fn(s, t))
