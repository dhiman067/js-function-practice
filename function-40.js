// Write a function removeDuplicates that takes an array of numbers and returns a new array where each value appears only once, keeping the first occurrence.

function removeDuplicates(numbers) {
  let unique = [];
  for(const num of numbers){
    if(!unique.includes(num)){
        unique.push(num)
    }
  }
 
  return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
