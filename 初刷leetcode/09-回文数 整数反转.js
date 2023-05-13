let sum = 121;
var isPalindrome = function (x) {
    let n = x;
    if (x < 0) {
        return false;
    } else if (x >= 0 && x <= 9) {
        return true;
    } else {
        let result = 0;
        while (x !== 0) {
            // digit负责保存数字中的个位数
            const digit = x % 10;
            // ~~ 是取整的意思    ~~1.9999 = 1  ~~-1.2 = -1
            // x负责保存数字中个位数前边的数
            x = ~~(x / 10);
            result = result * 10 + digit;
        }
        console.log(result);
        console.log(n);
        return n === result ? true : false;
    }
};
console.log(isPalindrome(sum));