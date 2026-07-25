// Write a function that takes a string as a parameter and returns the number of vowels found in it. 


function countVowels(string) {
    let count = 0
    for (const str of string.toLowerCase()) {
        if (str.includes('a') || str.includes('e') || str.includes('i') || str.includes('o') || str.includes('u')) {
            count++
        }

    }
    return count
}
const string = 'i Am a boy. a man like you'
const numberOfVowels = countVowels(string)
console.log(numberOfVowels);

const string2 = 'javascript'
const numberOfVowels2 = countVowels(string2)
console.log(numberOfVowels2);
