var arr = [1, 2, 3, -1, -2, -3, 4363, 2, 4, 5144]

function isEven(value) {
    return value % 2 === 0
}

var newArr = arr.filter(isEven)
console.log(newArr)