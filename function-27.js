// Write a function getOddNumbers that takes a number n and returns an array of all odd numbers from 1 to n (inclusive).

function getOddNumbers(n) {
    let odds = [];
    for (let i = 0; i <= n; i++)
        if (i % 2 === 1) {
            odds.push(i)
        }

    return odds;
}
console.log(getOddNumbers(10))
console.log(getOddNumbers(17))

