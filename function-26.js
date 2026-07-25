// Write a function productOfDigits that takes a positive whole number and returns the product of its individual digits. 

function productOfDigits(num) {
    let string = num.toString();
    let total = 1;
    for (const str of string) {
        // const strToInt = parseInt(str)
        total = str * total

    }


    return total
}
console.log(productOfDigits(123));
console.log(productOfDigits(1234));
console.log(productOfDigits(4040));

