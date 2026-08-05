// Write a function charFrequency(str) that returns an object showing how
// many times each character appears in the string. 

// let obj = {}
// obj["h"] = 1
// obj["o"] = 3
// console.log(obj);

function charFrequency(str){
    if(typeof str !== "string"){
        return "Invalid"
    }
    else{
        let obj = {}
        for(let character of str){
            if(character in obj){
                obj[character] = obj[character]+1
            }
            else{
                obj[character] = 1
            }
        }
        return obj
    }
}
console.log(charFrequency("hero"));
console.log(charFrequency("hello"));
console.log(charFrequency("book"));
console.log(charFrequency("223"));
console.log(charFrequency(23));

// let character = "hhellooo"
// let obj = {}
// for (let char of character) {
    
//     if (char in obj) {
//         obj[char] = obj[char] +1
        
//     }
//     else{
       
//         obj[char] = 1
//     }


// }

// console.log(obj);
// let student = {name:"rony" , roll:"23", section:'A'}
// console.log(Object.prototype.hasOwnProperty.call(student, "class"));
