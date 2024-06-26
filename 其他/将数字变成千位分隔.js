let num = 10000000  // 100,000,000

// function fn(num) {
//     let res = ''
//     let str = String(num)
//     let index = 0
//     let len = str.length - 1
//     while (len >= 0) {
//         index % 3 === 0 && index !== 0 ? res += ',' + str[len] : res += str[len]
//         index++
//         len--
//     }
//     return res.split('').reverse().join('')
// }

// 使用正则
function fn(num) {
    let str = String(num)
    return str.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => {
        return s + ','
    })
}
console.log(fn(num));