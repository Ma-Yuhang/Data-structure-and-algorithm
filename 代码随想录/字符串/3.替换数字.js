var replaceNumber = (s) => {
  let res = s
  for (let i = 0; i < res.length; i++) {
    if (isNumber(s[i])) {
      res = s.slice(0, i) + 'number' + s.slice(i + 1)
      i += 5
    }
  }
  return res
}

function isNumber(s) {
  return !isNaN(s)
}
console.log(replaceNumber('a1a'))
