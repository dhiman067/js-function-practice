// let nums = [250, 400, 150]
// let sum = nums.reduce((acc,num)=> acc+num,0)
// console.log(sum); 


// Task 1: calculateBill(amount, taxRate = 0.05) — Default Parameters 
// Return the final bill after tax is applied. Default tax rate is 5% when not provided. 

let calculateBill = (amount , taxRate = 0.05) => amount+ amount* taxRate
console.log(calculateBill(1000));
console.log(calculateBill(1000,0.10));
