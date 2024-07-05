function reverseRightWords(s, k) {
  const reverse = (sList, start, end) => {
    for (let i = start, j = end; i < j; i++, j--) {
      ;[sList[i], sList[j]] = [sList[j], sList[i]]
    }
  }
  const sList = Array.from(s)
  reverse(sList, 0, sList.length - k - 1)
  reverse(sList, sList.length - k, sList.length - 1)
  reverse(sList, 0, sList.length - 1)
  return sList.join('')
}

console.log(reverseRightWords('hello world!', 2))
