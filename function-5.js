// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd 

function odd_even(number){
    if(num % 2 === 0){
        console.log('number is even')
        return num
    }
    else{
        console.log('number is odd')
        return num
    }
}
const num = 5
const result = odd_even(num)
console.log(result)