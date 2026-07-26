 // Write a function findSecondSmallest that takes an array of numbers and returns the second smallest distinct value. 

//  const array = [10, 5, 8, 20, 15]
//    let smallest = Infinity;
//   let secondSmallest = Infinity;
// for(let i = 0 ; i<array.length; i++){
//     if(array[i]<smallest){
//         smallest= array[i]

//     }

// }
// const indexOfSmallest = array.indexOf(smallest)
// array.splice(indexOfSmallest,1)
// for(const arr of array){
//     if(arr < secondSmallest){
//         secondSmallest=arr
//     }
// }
// console.log(secondSmallest);


function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  
  for(const arr of numbers){
    if(arr<smallest){
        smallest= arr

    }

}

const indexOfSmallest = numbers.indexOf(smallest)
numbers.splice(indexOfSmallest,1)
for(const arr of numbers){
    if(arr < secondSmallest){
        secondSmallest=arr
    }
}
 
  return secondSmallest;
}
console.log(findSecondSmallest([10, 5, 8, 20, 15]));
console.log(findSecondSmallest([10, 5, 8, 20, 15,3,1]));