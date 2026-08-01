// let student = { user: { name: "Sadia", age: 22 }, hobbies: ["reading", "coding"] }
// for(const key in student){
//     console.log(key);
// }
// console.log(Object.entries(student));

// let { user,hobbies} = student
// let { name} = user
// let [first] = hobbies
// console.log(first);
// let {name,id} = student
// console.log(id);
// console.log(name);

function extractUserInfo(userObj) {


    let { user, hobbies } = userObj
    let { name, age } = user
    let [first = "nothing yet", second = "nothing yet", third="nothing yet"] = hobbies
    return `${name} (${age}) likes ${second}`
}
console.log(extractUserInfo({ user: { name: "Sadia", age: 22 }, hobbies: ["reading", "coding"] }));
console.log(extractUserInfo({ user: { name: "Rafi", age: 19 }, hobbies: [] }));