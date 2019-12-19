var arr = [1, 2, 3, -1, -2, -3]


function isPositive(val) {
    return val >= 0
}

var newArr = arr.filter(isPositive)

console.log(newArr)