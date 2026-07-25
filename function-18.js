// Find the lowest number in the array below. 
// const heights2 = [167, 190, 120, 165, 137];


// type-1

function arrayOfNumber (array){
    const lowestNum = Math.min(...array)
    return lowestNum
}
const array = [167, 190, 120, 165, 137,5]
const result = arrayOfNumber(array)
console.log(result)



// type-2

// function arrayOfNumber (array){
//     let smallNumber = array[0]
//     for(const num of array){
//         if(num<smallNumber){
//             smallNumber = num
//         }
//     }
//     return smallNumber
// }
// const array = [167, 190, 119, 165, 137]
// const result = arrayOfNumber(array)
// console.log(result)