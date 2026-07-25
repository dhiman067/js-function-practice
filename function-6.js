// calculate the average of an array 

function avgOfarray(array) {
    let sum = 0
    for (const num of array) {
        sum = num + sum
    }
    const avg =sum/array.length
    return avg
}

const numbers = [2,3,4,5,6,7]
const result = avgOfarray(numbers)
console.log(result)

const numbers2 = [1,2,3,4]
const result2 = avgOfarray(numbers2)
console.log(result2)