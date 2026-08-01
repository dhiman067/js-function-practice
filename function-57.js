// একটি Grocery Shop-এর POS System প্রতিটি Purchase-এর পর একটি Multi-line Receipt প্রিন্ট করে। Template Literal ব্যবহার করে এই Receipt তৈরি করতে হবে। 

function generateReceipt(customarName, items, total){
    if(Array.isArray(items) !== true || items.length ===0){
        return "Invalid"
    }
    else{
        return `Receipt for ${customarName}\nItems ${[...items]}\ntotal:${total}`
    }
}
console.log(generateReceipt("Sadia", ["Milk"], 60));
console.log(generateReceipt("Tanvir", [], 0));