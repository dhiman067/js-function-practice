// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function number (num){
   if(num % 2 === 1){
    multiply = num*2;
    return multiply;
   }
   else{
    divide = num/2 ;
    return divide;
   }

}
const result = number(9)
console.log(result)

console.log('------------------')

const result_2 = number(14)
console.log(result_2)