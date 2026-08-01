// একটি দোকানের Two Branch-এর Stock Array Spread Operator দিয়ে Merge করতে হবে,  

function mergeInventory(arr1,arr2){
    let mergedArray = [...arr1,...arr2]
    return mergedArray
}
let finalArray = mergeInventory([1,2],[3,4])
console.log(finalArray);

console.log(Math.max(...finalArray));