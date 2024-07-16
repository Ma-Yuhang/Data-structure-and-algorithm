var isValid = (s) => {
  const stack = []
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  for (const v of s) {
    if (v in map) {
      stack.push(map[v])
      continue
    }
    if (stack.pop() !== v) {
      return false
    }
  }
  return !stack.length
}

console.log(isValid('()[]'))
