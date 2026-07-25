// give me the average of the odd numbers in a array using function 

function avgOfOddNumbers(array){
    let count = 0
    let sumOfodd = 0

    for(const num of array){
        if(num % 2 === 1){
            count++
            sumOfodd += num
        }
    }
    
    const avgresult = sumOfodd / count
    
    return avgresult
    
    
} 
const numbers = [2,4,3,5,6,7,11,13]
const result = avgOfOddNumbers(numbers)
console.log(result)

// const numbers2 = [5,2,4,11,15,19,21]
// const result2 = avgOfOddNumbers(numbers2)
// console.log(result2)