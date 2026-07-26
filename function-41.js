// Write a function invertObject that takes an object with unique values and returns a new object where each original value becomes a key, and each original key becomes its value.

function invertObject(obj) {
  let inverted = {};
  for(const key in obj){
    values = obj[key]
    inverted[values] = key
   
  }
 return inverted
 
}

console.log(invertObject({ a: 1, b: 2, c: 3 }))
console.log(invertObject({ name: "Sam", age: 25 })) 

// const person = { a: 1, b: 2, c: 3 }
// let inverted = {};
//   for(const key in person){
//     values = person[key]
//     inverted[values] = key
   
//   }
//   console.log(inverted);