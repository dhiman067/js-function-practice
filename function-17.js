// Write a function to find the longest word in a given string. 
// const string = 'I am learning Programming to become a programmer'
// const arrayOfString = string.split(' ')

// let newArry = []
// for(const str of arrayOfString){
//     const len = str.length
//     newArry.push(len)

// }

// const max = Math.max(...newArry)
//  for(const str of arrayOfString){
//     if(max === str.length){
//         console.log(str)
//     }
//  }





function largeWord(string) {
    const arrayOfString = string.split(' ')

    let newArry = []
    for (const str of arrayOfString) {
        const len = str.length
        newArry.push(len)

    }

    const max = Math.max(...newArry)
    for (const str of arrayOfString) {
        if (max === str.length) {
            return str
        }
    }
}

const string = 'I am learning Programming to become a programmer'
const largeWordFromString = largeWord(string)
console.log(largeWordFromString)

const string2 = 'i want to the best person in the world'
const largeWordFromString2 = largeWord(string2)
console.log(largeWordFromString2)