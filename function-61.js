// একটি Product Catalog System একই Object তিন ভাবে Loop করে দেখাতে চায় — for…in, for…of + Object.entries, এবং Object.entries + Array Destructuring। 

// let frut = { fruit: "Mango", price: 50 }
// let newarray = []
// for(let frt in frut){
//     let prop = `${frt}:${frut[frt]}`
//     newarray.push(prop)
// }
// console.log(newarray); 

// let entries = Object.entries(frut)
// let newarray =[]
// for(let entry of entries){
// let str = entry.join(":")
// newarray.push(str)
// }
// console.log(newarray);


// let nums = [2,4,6,8]
// let newarr = nums.map(num=>num*2) 

// let entries = Object.entries(frut)
// let result = entries.map(entry=>{
//     let[key,value] = entry
//     return `${key}:${value}`
// })

// console.log(result);

function printObjectDetails(obj, loopType) {
    
     if (loopType === "forin") {
        let newArr = []
        for (let key in obj) {
            newArr.push(`${key}:${obj[key]}`)
        }
        return newArr
    }
    else if (loopType === "forof") {
        let entries = Object.entries(obj)
        let newarray = []
        for (let entry of entries) {
            let str = entry.join(":")
            newarray.push(str)
        }
        return newarray
    }
    else if (loopType === "entriesDestructure") {
        let entries = Object.entries(obj)
        let result = entries.map(entry => {
            let [key, value] = entry
            return `${key}:${value}`
            
        })
        return result
    }
    else{
        return "Invalid"
    }
}

console.log(printObjectDetails({fruit:"Mango",price:50}, "forin"));
console.log(printObjectDetails({fruit:"Apple",price:40}, "entriesDestructure"));
console.log(printObjectDetails({fruit:"Apple",price:40}, "loop"));
console.log(printObjectDetails([], "loop"));


