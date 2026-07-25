// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// const number = '001010010101000'
// let count = 0
// for(const zero of number){
//     if(zero === '0'){
//         count++

//     }

// }
// console.log(count)


let count = 0
function count_zero(binaryString) {
    for (const zero of binaryString) {
        if (zero === '0') {
            count++
        }
    }
    console.log(count)
}
const number = '101001010101000'
count_zero(number)