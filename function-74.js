// let nums= [1,2,3,4,5,6]
// let newArr = [...nums]
// newArr[1] = 7
// console.log(newArr);
// console.log(nums);

// let person = { name: "Rafi", title: "Junior Dev" }
// let newPer = {...person}
// newPer['title']="Senior Dev"
// console.log(newPer);
// console.log(person);

// Return a NEW employee object with title updated to newTitle. Original object must remain unchanged.
function promoteEmployee(employee, newTitle){
    let updatedInfo = {...employee}
    updatedInfo["title"]= newTitle
    console.log(employee);
    return updatedInfo
}
console.log(promoteEmployee({ name: "Rafi", title: "Junior Dev" }, "Senior Dev"));


//  Return a new array with the value at index replaced by newValue, without mutating the original array.
function cloneAndUpdate(arr, index, newValue){
    let newArr = [...arr]
    newArr[index] = newValue
    console.log(arr);
    return newArr
}
console.log(cloneAndUpdate([5, 10, 15], 1, 99));

