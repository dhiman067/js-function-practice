// Write a function countVowels(str) that counts how many vowels (a, e, i, o,
// u) appear in a string, case-insensitive. 

function countVowels(str) {
    let vowels = 'aeiou'
    let count = 0
    for (const st of str) {
        if (vowels.includes(st.toLowerCase())) {
            count++
        }
    }
    return count
}
console.log(countVowels('hEllo wOrld'));