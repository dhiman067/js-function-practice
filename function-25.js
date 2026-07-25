// Write a function reverseNumber that takes a positive whole number and returns it with its digits reversed. (Hint: convert the number to a string first.) 


function reverseNumber(nums) {
    let newArray = []
    let string = nums.toString();
    for (const str of string) {
        newArray.unshift(str)
    }
    const reversedNum = parseInt(newArray.join(''))
    return reversedNum
}
console.log(reverseNumber(1234));
console.log(reverseNumber(7));