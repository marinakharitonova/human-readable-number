module.exports = function toReadable(number) {
    let result = '';
    const writingNumbers = {
        1 : ['one', 'ten'],
        2 : ['two', 'twen'],
        3 : ['three', 'thir'],
        4 : ['four', 'for'],
        5 : ['five', 'fif'],
        6 : ['six', 'six'],
        7 : ['seven', 'seven'],
        8 : ['eight', 'eigh'],
        9 : ['nine', 'nine'],
        0 : ['zero'],
        11: ['eleven'],
        12: ['twelve']
    }

    if (number / 100 >= 1) {
        result += `${writingNumbers[Math.trunc(number / 100)][0]} hundred`;
        if (number % 100 === 0) {
            return result;
        } else {
            result += ` `;
        }
    }

    if (number / 10 >= 1) {
        const dozens = Number(number.toString().slice(-2));
        const decimalPart = Number(dozens.toString().slice(0, 1));
        const unitPart = Number(dozens.toString().slice(-1));
        if (dozens % 10 === 0) {
            result += dozens === 10 ?
                `${writingNumbers[1][1]}` :
                `${writingNumbers[decimalPart][1]}ty`
        } else {
            if (dozens > 19) {
                result += `${writingNumbers[decimalPart][1]}ty ${writingNumbers[unitPart][0]}`
            } else {
                if (dozens > 12) {
                    result += dozens === 14 ?
                        `${writingNumbers[unitPart][0]}teen` :
                        `${writingNumbers[unitPart][1]}teen`
                } else {
                    result += `${writingNumbers[dozens][0]}`
                }
            }
        }

    } else {
        result = writingNumbers[number][0];
    }

    return result;
}
