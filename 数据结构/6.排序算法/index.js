let arr = [12, 5, 3, 15, 67, 4]
// let arr = []
// for (let i = 1; i <= 50; i++) {
//   arr.push(parseInt(Math.random() * 100))
//   // arr.push(i)
// }

// 1.冒泡排序(从小到大) 比较次数：O(n²)  交换次数：O(n²)
// function bubbleSort(arr) {
//   const start = Date.now()
//   const length = arr.length
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // 如果当前这个数 大于 后边一个数就交换顺序
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // es6 [a,b] = [b,a]
//       }
//     }
//   }
//   const end = Date.now()
//   console.log(end - start + 'ms' + '冒泡排序');
//   return arr
// }
// console.log(bubbleSort(arr));

// 2.选择排序(从小到大) 比较次数：O(n²)  交换次数：O(n) 整体效率高于 冒泡排序
// function seleteSort(arr) {
//   const start = Date.now()
//   const length = arr.length
//   for (let i = 0; i < length; i++) {
//     let max = 0 // 最大值的下标
//     for (let j = 1; j < length - i; j++) {
//       if (arr[j] > arr[max]) {
//         max = j
//       }
//     }
//     [arr[length - 1 - i], arr[max]] = [arr[max], arr[length - 1 - i]] // 此次循环的最后一位和此次循环的最大值交换
//   }
//   const end = Date.now()
//   console.log(end - start + 'ms' + '选择排序');
//   return arr
// }
// console.log(seleteSort(arr));

// 3.插入排序 整体效率高于选择排序
// function insertSort(arr) {
//   const start = Date.now()
//   const length = arr.length
//   for (let i = 1; i < length; i++) { // 看做i之前局部有序
//     let temp = arr[i]
//     let j = i
//     // j > 0 放在前边 效率远高于 放在后边
//     // j > 0 && arr[j - 1] > temp 效率远高于 arr[j - 1] > temp && j > 0
//     while (j > 0 && arr[j - 1] > temp) {
//       // while (arr[j - 1] > temp && j > 0) {
//       arr[j] = arr[j - 1]
//       j--
//     }
//     arr[j] = temp
//   }
//   const end = Date.now()
//   console.log(end - start + 'ms' + '插入排序');
//   return arr
// }
// console.log(insertSort(arr));

// 4.希尔排序(基于插入排序) 选择不同的间隔
// function shellSort(arr) {
//   const start = Date.now()
//   const length = arr.length
//   let gap = Math.floor(length / 2) // 间隔

//   while (gap >= 1) {
//     for (let i = gap; i < length; i++) {
//       let temp = arr[i]
//       let j = i
//       while (j >= gap && temp < arr[j - gap]) {
//         arr[j] = arr[j - gap]
//         j -= gap
//       }
//       arr[j] = temp
//     }

//     gap = Math.floor(gap / 2)
//   }
//   const end = Date.now()
//   console.log(end - start + 'ms' + '希尔排序');
//   return arr
// }
// console.log(shellSort(arr));
// shellSort(arr)

// 5.快速排序
// function fn(arr) {
//   const start = Date.now()
//   const res = quickSort(arr)
//   const end = Date.now()
//   console.log(end - start + 'ms' + '快速排序');
//   return res
// }

// function quickSort (arr) {
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
// console.log(fn(arr));
