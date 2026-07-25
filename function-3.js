// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

let sum = 0

function make_avg(array,len) {
    for (const num of numbers) {
        sum = num + sum
    }

const avg = sum/len 
    return avg
}
const numbers = [1,2,8,10,12]
const size = numbers.length
const rslt = make_avg(numbers,size)
console.log(rslt.toFixed(2))