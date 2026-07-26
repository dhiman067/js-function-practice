// Write a function findShortestWord that takes a sentence and returns the shortest word in it. 

function findShortestWord(sentence) {
  let words = sentence.split(" ");
  let shortest = words[0];
  for(const word of words){
    if(word.length < shortest.length){
        shortest = word
      
    }
  }
 
  return shortest;
}

console.log(findShortestWord("JavaScript is a fun language")); 
console.log(findShortestWord("the teacher is very bad")); 
