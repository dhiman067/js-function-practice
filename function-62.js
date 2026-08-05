// Write a function sumDigits(num) that adds up all the individual digits of a
// number.  

function sumDigits(num) {
    let str = String(num)
    let sum = 0
    for (const ele of str) {
        sum += Number(ele)
    }
    return sum
}
console.log(sumDigits(1234));
console.log(sumDigits(12345));
