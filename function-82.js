//  getTotalStockValue(products) — reduce() 
// Given an array of products { price, stock }, return the total value of all stock combined (price × stock, summed).

let getTotalStockValue =(products =>{
    let element = products.reduce((acc,value) =>{
      return  acc+(value.price*value.stock)
        
    },0)
    return element
})
console.log(getTotalStockValue( [{ price: 50, stock: 4 }, { price: 20, stock: 10 }] 
));


// let num = [1,3]
// let sum = num.reduce((acc,value)=> {
//    return acc+value
    
// },0)

// console.log(sum);