let str = "abbabcb";
//中心扩展法
var longestPalindrome = function (s) {
    if (s.length <= 1) return s

    let start = 0
    let maxLength = 1

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i - 1, i + 1)
        expandAroundCenter(i, i + 1)
    }
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1
                start = left
            }
            left--, right++
        }
    }
    return s.slice(start, start + maxLength)
}

console.log(longestPalindrome(str));
