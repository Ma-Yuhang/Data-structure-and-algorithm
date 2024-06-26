// 输入：l1 = [1,2,4], l2 = [1,3,4]  输出：[1,1,2,3,4,4]
let arr1 = [1,4,12,43,44,565]
let arr2 = [1,3,4]
const mergeTwoLists = (arr1,arr2) => {
  let i = 0, j= 0
  let res = []
  let a1 = [...arr1]
  let a2 = [...arr2]
  while (i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      res.push(arr1[i])
      a1.shift()
      i++
    }else {
      res.push(arr2[j])
      a2.shift()
      j++
    }
  }
  if(a1.length !== 0) {
    for (let i = 0; i < a1.length; i++) {
      res.push(a1[i])
    }
  }
  if(a2.length !== 0) {
    for (let i = 0; i < a2.length; i++) {
      res.push(a2[i])
    }
  }
  return res
}
console.log(mergeTwoLists(arr1,arr2));