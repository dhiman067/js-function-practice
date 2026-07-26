// Write a function averageOfArray that takes an array of numbers and returns their average. 

function averageOfArray(numbers) {
    let total = 0;
    for (const num of numbers) {
        total = num + total
    }
    const avg = total / numbers.length

    return avg;
}

console.log(averageOfArray([2, 4, 6])); 
console.log(averageOfArray([2, 4, 6,8])); 
