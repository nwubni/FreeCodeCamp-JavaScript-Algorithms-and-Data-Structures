function convertToRoman(num) {
    const romanNums = [
        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        ['X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX'],
        ['', '', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
    ];

    const thousand = parseInt(num / 1000);
    num = thousand > 0 ? num % 1000 : num;
    const hundred = parseInt(num / 100);
    num = hundred > 0 ? num % 100 : num;
    const tens = parseInt(num / 10);
    num = tens > 0 ? num % 10 : num;

    let ans = "";
    ans += 'M'.repeat(thousand);
    ans += romanNums[3][hundred];
    ans += tens === 1 ? romanNums[1][num] : romanNums[2][tens];
    ans += tens !== 1 ? romanNums[0][num] : '';

    return ans;
}

console.log(convertToRoman(2014));