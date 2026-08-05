// Write a function reverseEachWord(sentence) that reverses every individual
// word but keeps the word order the same.  

let string = 'Hero is strong'
let arrOfString = string.split(" ")

let newArr = []

for(let words of arrOfString){
    
  for(let i=words.length-1; i>=0; i--){
    
    newArr.push(words[i])
    
  }
}

console.log(newArr.join(""));

// for(let i= 10; i>0; i--){
//     console.log(i);
// }


