/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
const strs = ["bdddddddddd", "bbbbbbbbbbc"]
var groupAnagrams = function (strs) {
  const map = new Map()
  for (const str of strs) {
    const arr = new Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
      let ascii = str.charCodeAt(i) - 97
      arr[ascii]++
    }
    const key = arr.toString()
    console.log(key);
    if (map.has(key)) {
      map.set(key, [...map.get(key), str])
    } else {
      map.set(key, [str])
    }
  }
  let result = []
  for (const arr of map) {
    result.push(arr[1])
  }
  return result
};
console.log(groupAnagrams(strs));