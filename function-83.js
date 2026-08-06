//  getDiscountedTotalForCategory(products, category) — Chaining map + filter + reduce 
// Given an array of products { name, category, price }, return the total price of all products in the given category after applying a 10% discount to each.
// Input: 
// products = [{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }], category = "stationery" 
// Output: 144 

// map,filter,reduce
function getDiscountedTotalForCategory(products,category){
    let elementMap = products.map(product =>{
         let {category,price} = product
         return {category,price}
    })
     let elementFilter = elementMap.filter(element=> category === element.category)
     let elementReduce = elementFilter.reduce((acc,value)=> acc+ (value.price - (value.price * (10/100))),0)

    return elementReduce
}
console.log(getDiscountedTotalForCategory([{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }], category = "stationery"));


// loop,conditional
function getDiscountedTotalForCategory(products,cate){
    let total = 0
    for(let obj of products){
        let {name,category,price} =obj
        if(category === cate){     
           let discountPrice = price - price*(10/100)
           total+=discountPrice

        }

    }
    return total
}
console.log(getDiscountedTotalForCategory([{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }], category = "stationery"))