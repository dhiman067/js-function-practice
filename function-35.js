// Problem Statement:
// Write a function listKeys that takes an object and returns an array containing its property names (keys). 

function listKeys(obj) {
  let keys = [];
  for(const key in obj){
keys.push(key)
  }
 return keys;
  
}
 
console.log(listKeys({ name: "Sam", age: 25, city: "Dhaka" , district:"narayanganj"}));
// Expected: ["name", "age", "city"]

