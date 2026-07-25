// Write a function with a default parameter for discount percentage (10%) that returns the discounted price of an item. 


function discountedPrice(price=100,discount=10){
    const finalPrice = price - price * discount/100
    return finalPrice
}
// const price = 100
const priceAfterDiscount = discountedPrice()
console.log(priceAfterDiscount)

const price2 = 1000
const priceAfterDiscount2 = discountedPrice(price2)
console.log(priceAfterDiscount2)