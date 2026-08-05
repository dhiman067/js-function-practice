// Write a function countEvenOdd(arr) that returns an object like { even: 3,
// odd: 2 } counting how many even and odd numbers are in the array. 

function countEvenOdd(arr){
    if(!(Array.isArray(arr))){
        return "Invalid"
    }
    else{
        let countEven = 0
        let countOdd = 0
        for(let num of arr){
            if(typeof num !== "number"){
                return "Invalid"
            }
            else{
                if(num % 2 === 0){
                    countEven++
                }
                else{
                    countOdd++
                }
            }
        }
        return {even:countEven , odd:countOdd}
    }
}

console.log(countEvenOdd([1,2,3,4,5]));
console.log(countEvenOdd([16,13,34,56,34,78,6,44]));
console.log(countEvenOdd([16,13,34,56,34,78,'eng',44]));