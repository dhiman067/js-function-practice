// Write a function countMultiplesOfThree that takes an array of numbers and returns how many of them are divisible by 3. 


function countMultiplesOfThree(numbers) {
    let count = 0;
    for (const num of numbers) {
        if (num % 3 === 0){
            count++
        }
  }

    return count;
}
console.log(countMultiplesOfThree([3, 4, 6, 7, 9, 10]));
console.log(countMultiplesOfThree([3, 4, 6, 7, 9, 10,12,14,16,15]));
