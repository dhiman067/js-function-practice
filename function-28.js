// Write a function removeFirstAndLast that takes a string and returns it with the first and last character removed. 

function removeFirstAndLast(string) {
    let array = []
  for(const str of string){
array.push(str)
  }
 array.shift()
 array.pop()
 const newstr = array.join('')
 return newstr
}
console.log(removeFirstAndLast("hello"))
console.log(removeFirstAndLast("general"))


