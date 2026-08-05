// Task 5: getEmployeeDept(employee) — Nested Destructuring 
// Given { name, job: { title, department } }, return { title, department } using nested destructuring.
 
let getEmployeeDept = (employee =>{
    let {name,job:{title, department}} = employee
    return {title:title , department:department}
})
console.log(getEmployeeDept({ name: "Nadia", job: { title: "PM", department: "Product" } }
));