const string = 'i want to be a programmer'
// console.log(string.split('').reverse().join(''));
let newstr = []
for(const str of string){
    newstr.unshift(str)
}
console.log(newstr.join(''));