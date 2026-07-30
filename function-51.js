// Write a function removeDuplicates(arr) that returns a new array with only
// unique values, preserving order.

function removeDuplicates(arr) {
    let uniqueArray = []
    for (const ele of arr) {
        if (!(uniqueArray.includes(ele))) {
            uniqueArray.push(ele)
        }
    }
    return uniqueArray
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));