// Given an employee object that may or may not have a manager property, return the manager's name safely, or undefined if missing.  

function getManagerName(employee){
    let {name, manager} = employee
    return manager?.name
}
console.log(getManagerName({ name: "Mim", manager: { name: "Tanvir" } }));
console.log(getManagerName({ name: "Rafi"}));