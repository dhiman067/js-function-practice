// Write a function getValueOrDefault that takes an object, a key name, and a default value, and returns the object's value for that key if it exists, otherwise the default value. 

function getValueOrDefault(obj, key, defaultValue) {
  // TODO: check if the key exists in the object

  if(Object.keys(obj).includes(key)){
    return obj[key]
  }
  else{
    return defaultValue
  }
  
 
}
let person = { name: "Sam", age: 25 };
console.log(getValueOrDefault(person, "age", 0));
console.log(getValueOrDefault(person, "grade", "N/A"));     

