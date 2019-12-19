var inputNum = 134124

function reduceNum(value) {
    if (value >= 10) return reduceNum(value.toString()
        .split('')
        .reduce((acc, val) => acc + +val, 0))
    return value
}

console.log('Sum =', reduceNum(inputNum))