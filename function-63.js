// ExpenseMate, a budgeting app, shows a running total next to each
// expense. Write a function runningTotal(amounts) that returns a new array where each
// element is the cumulative sum up to that point. 

let runningTotal = (amounts) => {
    let sum = 0
    let newArray = []
    for (const amount of amounts) {
        sum += amount
        newArray.push(sum)
    }
    return newArray
}
console.log(runningTotal([100, 50, 25]));
console.log(runningTotal([100, 50, 25,1,3]));