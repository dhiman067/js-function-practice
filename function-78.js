//  Problem 1: Add Grade to Each Student (Without Changing Original)
  
//   You have an array of student objects, each with name and marks.
//   Create a NEW array where every student also has a "grade" field,
//   based on their marks. The ORIGINAL array must stay exactly the same.

//   Grading rule:
//     marks >= 90 -> "A+"
//     marks >= 80 -> "A"
//     marks >= 60 -> "B"
//     below 60    -> "Fail"  
//   Input:
//     [
//       { name: "Rafi", marks: 85 },
//       { name: "Karim", marks: 45 }
//     ]

//   Output (new array):
//     [
//       { name: "Rafi", marks: 85, grade: "A" },
//       { name: "Karim", marks: 45, grade: "Fail" }
//     ]

//   Original array must remain untouched (no "grade" field added to it).


let arrayWithGrades = (array)=>{

    let newArray = []
    for(let obj of array){
        let newObj = {...obj}
        if(obj.marks >= 90){
            newObj["grade"] = "A+"

        }
        else if(obj.marks>=80){
            newObj["grade"] = "A"
        }
        else if(obj.marks>= 60){
            newObj["grade"] = "B"
        }
        else{
            newObj["grade"]="Fail"
        }
        newArray.push(newObj)
        
    }
    
    return newArray

}

let stu = [
      { name: "Rafi", marks: 85 },
      { name: "Karim", marks: 45 },
      { name: "Utsho", marks: 95 },
  { name: "Akash", marks: 65 },
    ]
console.log(arrayWithGrades(stu));

console.log(stu);