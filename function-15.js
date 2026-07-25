// Write a function that takes an array of numbers as a parameter and returns a new array containing only the numbers
// greater than 10. 

function arrayOfNumber (array){
    let newArray = []
    for(const num of array){
        if(num>10){
            newArray.push(num)
        }
    }
    return newArray
}
const array = [2,5,7,12,10,25,9,56,98,3,11]
const arrayOfGreaterThanTen = arrayOfNumber(array)
console.log(arrayOfGreaterThanTen)
