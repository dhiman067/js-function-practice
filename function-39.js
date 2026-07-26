// Write a function reverseWords that takes a sentence and returns it with the order of the words reversed (the letters inside each word stay the same). 

function reverseWords(sentence) {
const arrayOfWords = sentence.split(" ") 
arrayOfWords.reverse()
const reverseWords = arrayOfWords.join(" ")
return reverseWords
}
console.log(reverseWords("hello world"));
console.log(reverseWords("i have a book"));