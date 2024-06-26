let arr = [1, 3, 65, 2, 5]

// 快速排序 报错
function quickSort(arr) {
  if (arr.length <= 1) return arr
  let length = arr.length
  let provotIndex = Math.floor(length / 2)
  let provot = arr.splice(provotIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < length; i++) {
    if (arr[i] < provot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([provot], quickSort(right))

}
console.log(quickSort(arr));

// 正常（为啥）
// function quickSort(arr) {
//   if (arr.length <= 1) return arr
//   let provotIndex = Math.floor(arr.length / 2)
//   let provot = arr.splice(provotIndex, 1)[0]
//   let left = []
//   let right = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < provot) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }
//   return quickSort(left).concat([provot], quickSort(right))

// }
// console.log(quickSort(arr));