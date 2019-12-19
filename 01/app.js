var inputArr = [1, 4, 5, [8, 0, 10, 3], 6, 64, 64, 54, {key: "name", age: 18, arr: ['arrval', 32]}]

function recoverArr(value) {
    if (!Array.isArray(value) && !({}.toString.call(value).slice(8, -1) === 'Object')) return console.log(value)
    if (Array.isArray(value)&& value.length>0) {
        recoverArr(value.shift())
        recoverArr(value)
    }
    if ({}.toString.call(value).slice(8, -1) === 'Object') recoverArr(Object.values(value))
}

recoverArr(inputArr)