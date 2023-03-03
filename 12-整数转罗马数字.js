let num = 1999;
// var intToRoman = function (num) {
//     const thousands = ["", "M", "MM", "MMM"];
//     const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
//     const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
//     const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

//     const roman = [];
//     roman.push(thousands[Math.floor(num / 1000)]);
//     roman.push(hundreds[Math.floor(num % 1000 / 100)]);
//     roman.push(tens[Math.floor(num % 100 / 10)]);
//     roman.push(ones[num % 10]);
//     return roman.join('');
// };


var intToRoman = function (num) {
    const valueSymbols = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
    const roman = [];
    for (const [value, symbol] of valueSymbols) {
        while (num >= value) {
            num -= value;
            roman.push(symbol);
        }
        if (num == 0) {
            break;
        }
    }
    return roman.join('');
};
console.log(intToRoman(num));