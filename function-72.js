// Task 4: swapValues(a, b) — Destructuring 
// Return [b, a] using array destructuring assignment, no temporary variable.
 

function swapValues(a,b){
    let array = [a,b]
    let [x,y] = array
    return [y,x]
    
}
console.log(swapValues(5,10));