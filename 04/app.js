var testNum = 1434

function getDigitsSum(value) {
    return value.toString()
        .split('')
        .reduce((acc, val) => acc + +val, 0)
}

console.log(getDigitsSum(testNum))