// Given an array of numbers, find both the largest AND smallest value using
// a single loop (no built-in Math.max/Math.min).

function largestAndSmallestNumber (array){
    let largeNum = array[0]
    let smallNum = array[0]
for(const num of array){
    if(num>largeNum){
        
        largeNum = num
    }
    else{
        if(num<smallNum)
        smallNum = num
    }
}
return { largest: largeNum, smallest: smallNum }
}
console.log(largestAndSmallestNumber([45, 12, 89, 3, 67]));