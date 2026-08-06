// let num = (10, 20, 40)
// console.log(10, ...num);
function calculateTotal(discount, ...prices) {
    let sum = 0
    for (let price of prices) {
        sum += price
    }
    let total = sum- sum*(discount/100) 
    return total
}

console.log(calculateTotal(10, 100,200));