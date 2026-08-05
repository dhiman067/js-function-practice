// QuickCart, an e-commerce app, double-checks that the sum of individual
// item prices matches the total shown at checkout. Write a function
// verifyCartTotal(itemPrices, displayedTotal) that returns true if they match. 

function verifyCartTotal(itemPrices, displayedTotal) {
    if (!(Array.isArray(itemPrices)) || typeof displayedTotal !== "number") {
        return "Invalid"
    }
    else {
        let total = 0
        for (let prices of itemPrices) {
            if (typeof prices !== "number") {
                return "Invalid"
            }
            else {
                total += prices
            }
        }

        if (total === displayedTotal) {
            return true
        }
        else{
            return false
        }
    }
}
console.log(verifyCartTotal([250, 400, 150], 800));
console.log(verifyCartTotal([250, 400, 150], 750));
console.log(verifyCartTotal([250, 400, 150], 801));
console.log(verifyCartTotal([250, 400], 650));
console.log(verifyCartTotal([250, 'red'], 650));
console.log(verifyCartTotal([250, 34], "650"));