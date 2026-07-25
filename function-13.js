// Write a function that takes a number as a parameter and returns its factorial. 

function factorial(num){
    let factorial = 1
    if(num===0|| num ===1){
        return 1
    }
    else if(num<0){
        return undefined
    }
    else{
    for(let i=1; i<=num; i++){
        factorial=factorial*i
    }
    return factorial
    }
}
const number = 10
const result = factorial(number)
console.log(result)

const number2 = -2
const result2 = factorial(number2)
console.log(result2)