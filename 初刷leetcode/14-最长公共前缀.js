
let arr = ['lala', 'lashb', 'layb']
// var longestCommonPrefix = function (strs) {
//     let result = ''
//     let firstStartsWith = ''
//     const [first] = strs  //['lala']
//     // console.log([first]);
//     for (let j = 0; j < first.length; j++) {
//         firstStartsWith += first[j]
//         if (strs.every(item => item.startsWith(firstStartsWith))) {
//             result = firstStartsWith
//         }
//     }
//     return result
// };

var longestCommonPrefix = function (strs) {
    var re = '';
    if (!strs.length) return re;
    for (var j = 0; j < strs[0].length; j++) {//第j位
        for (var i = 1; i < strs.length; i++) {//第i个
            if (strs[0][j] != strs[i][j]) return re
        }
        re += strs[0][j];
    }
    return re;
};
console.log(longestCommonPrefix(arr));
console.log('ladaf'.startsWith('l'));
