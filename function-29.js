// Write a function isPalindrome that takes a string and returns true if it reads the same forwards and backwards, otherwise false. Assume lowercase, no spaces. 

function isPalindrome(string) {
    let newArray = []
    let palindrome = ''
    for (const str of string) {
        newArray.unshift(str)
        palindrome = newArray.join("")
        
    }
    if(palindrome === string){
            return true
        }
        else{
            return false
        }
   
}

console.log(isPalindrome("hii"))
console.log(isPalindrome("hello"))
console.log(isPalindrome("madam"))
