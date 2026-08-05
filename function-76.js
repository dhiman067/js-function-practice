// Return { first, rest } where first is the first element and rest is an array of all remaining elements. 

function splitFirstRest(arr){
    let newArr = []
    for(let nums of arr){
        if(nums === arr[0]){
            continue
        }
        else{
            newArr.push(nums)
        }
    }
    return {first:arr[0], rest:newArr}
}
console.log(splitFirstRest([10, 20, 30, 40]));
console.log(splitFirstRest([20, 30, 40]));