// Write a function isPerfectSquare that takes a number and returns true if it is a perfect square, otherwise false.

function isPerfectSquare(num) {
    if(num<0){
        return 'please insert a positive number'
    }
    
  if(Number.isInteger(Math.sqrt(num))){
    return true
  }
  else{
    return false
  }
 
}
console.log(isPerfectSquare(16)); 
console.log(isPerfectSquare(20)); 
console.log(isPerfectSquare(61)); 
console.log(isPerfectSquare(100)); 
console.log(isPerfectSquare(1)); 
console.log(isPerfectSquare(-2)); 

