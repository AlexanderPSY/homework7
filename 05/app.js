var arr = [1, 2, 3, -1, -2, -3, 4363, 2, 4, 5145]

function isNumberInRange(val) {
    return val > 0&& val <10
}

var newArr = arr.filter(isNumberInRange)

console.log(newArr);