// take and array of numbers as an fuction and gives the even numbers from it in another array 

function arrayOfnumbers(array) {
    let arrayOfevenNumbers = []
    for (const num of array) {
        if (num % 2 === 0) {
            arrayOfevenNumbers.push(num)
        }
    }
    return arrayOfevenNumbers
}

const numbers = [1,2,3,4,5,6]
const result = arrayOfnumbers(numbers)
console.log(result)

const numbers2 = [11,14,16,15,21,35,40,49]
const result2 = arrayOfnumbers(numbers2)
console.log(result2)