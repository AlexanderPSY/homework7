// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей
// (чисел, на которое делится данное число).

var inputNum = 134124

function getDivisors(value) {
    let arr = []
    let maxDiv = value
    while (maxDiv) {
        if (value % maxDiv === 0) arr.push(maxDiv)
        maxDiv--
    }
    return arr
}

console.log('Arr of Divisors =', getDivisors(inputNum))