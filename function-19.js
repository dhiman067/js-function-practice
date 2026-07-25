// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed','jo'];


// let arrayOfNameLength = []
// for (const height of heights2) {
//     nameLength = height.length
//     arrayOfNameLength.push(nameLength)

// }

// const smallNameLength = Math.min(...arrayOfNameLength)

// for(const height of heights2){
//     if(smallNameLength === height.length){
//         console.log(height)
//     }
// }

function arrayOfNames(arrayNames){
    let arrayOfNameLength = []
for (const name of arrayNames) {
    nameLength = name.length
    arrayOfNameLength.push(nameLength)

}

const smallNameLength = Math.min(...arrayOfNameLength)


 let arrayOfSmallNames = []
for(const name of arrayNames){
    if(smallNameLength === name.length){
        arrayOfSmallNames.push(name)
       
    }
   
}
 return arrayOfSmallNames

}

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const smallestName = arrayOfNames(names)
console.log(smallestName);