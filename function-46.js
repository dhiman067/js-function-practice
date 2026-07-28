function resultReport(marks) {
    let objOfinalResult = {}
    let sumOfMarks = 0
    let passCount = 0
    let failCount = 0
    if (!(Array.isArray(marks))) {
        return "invalid"
    }
    else {
        for (const mark of marks) {
            sumOfMarks += mark
            if (mark >= 40) {
                passCount++
            }
            else {
                failCount++
            }

        }
    }

    let avgOFMarks = marks.length === 0 ? 0 : sumOfMarks / marks.length
    objOfinalResult["finalScoure"] = parseInt(avgOFMarks)
    objOfinalResult["pass"] = passCount
    objOfinalResult["fail"] = failCount
    return objOfinalResult
    // You have to write your code here
}
console.log(resultReport([99, 87, 67, 12, 87]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([98]));
console.log(resultReport([])); 
console.log(resultReport("hello")); 
console.log(resultReport([])); 
console.log(resultReport({mak:30,age:20})); 
console.log(resultReport([45,60,33,89,63,38])); 





