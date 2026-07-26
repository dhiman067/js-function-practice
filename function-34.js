// Write a function keepEvenNumbers that takes an array of numbers and returns a new array with only the even numbers. 

function keepEvenNumbers(numbers) {
  let result = [];
  for(const num of numbers){
    if(num % 2 === 0){
        result.push(num)
    }
  }
 
  return result;
}
 
console.log(keepEvenNumbers([3, -5, 8, -1, 0])); // Expected: [8, 0]
console.log(keepEvenNumbers([3, -5, 8, -1, 6,32,76,21,-2])); 
