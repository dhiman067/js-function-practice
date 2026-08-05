// Write a function secondLargest(arr) that finds the second largest number in
// an array WITHOUT using sort().

function secondLargest(arr) {
    let largestNum = Math.max(...arr)
    let newArr = []
    for (let num of arr) {
        if (num === largestNum) {
            continue
        }
        else {
            newArr.push(num)
        }
    }
    return Math.max(...newArr)
}

console.log(secondLargest([45,12,89,3,67]));
console.log(secondLargest([45,12,89,3,7]));
console.log(secondLargest([45,12,8,3,7]));