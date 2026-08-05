// Given a single employee object (name, basicSalary, bonus, tax), write a
// function generateSalarySlip(employee) that returns a NEW object containing the
// employee's name and their netSalary (basicSalary + bonus - tax). 

// function generateSalarySlip(employee){
//     if(typeof employee !== "object"){
//         return "Invalid"
//     }
//     else{
//         if(typeof employee["basicSalary"] !=="number" || typeof employee["bonus"] !== "number" || typeof employee["tax"] !== "number"){
//             return "Invalid"
//         }
//         else{
//             let netSalary = employee["basicSalary"] + employee["bonus"] - employee["tax"]
//             return {name:employee["name"] , netSalary: netSalary}
//         }
//     }
// }

// console.log(generateSalarySlip({ name:'Karim', basicSalary:30000, bonus:5000, tax:2000 }));
// console.log(generateSalarySlip(["er","rerer"]));


function generateSalarySlip(employee){
    if(typeof employee !== "object"){
        return "Invalid"
     }
     else{
        let {name,basicSalary, bonus, tax} = employee
        if(typeof basicSalary!== "number" || typeof bonus !== "number" || typeof tax !== "number"){
            return "Invalid"
        }
        else{
            let Salary = basicSalary + bonus - tax
            return{name: name , netSalary: Salary}
        }
     }
}

console.log(generateSalarySlip({ name:'Aarim', basicSalary:40000, bonus:5000, tax:2000 }));
console.log(generateSalarySlip({ name:'Aarim', basicSalary:40000, bonus:"5000", tax:2000 }));