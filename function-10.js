// Write a function that takes a person's name and age as parameters and returns a formatted introduction sentence.


function personInfo (name,age){
const introduction =`the name of the person is ${name} and age is ${age}`
return introduction
}
const name = 'rony'
const age = 22
const person = personInfo(name,age)
console.log(person)

const name2 = 'jhony'
const age2 = 25
const person2 = personInfo(name2,age2)
console.log(person2)