// Task 2: buildProfileCard(user) — Template Literals 
// Given { name, title, company }, return a multiline string using template literal interpolation only  

function buildProfileCard(user){
    let {name, title, company} = user
    return `${name}\n${title} at ${company}`
}
console.log(buildProfileCard({ name: "Arif", title: "Developer", company: "Programming Hero" }
));
