// Given a single student object with name and three subject marks (bangla,
// english, math), write a function generateReportCard(student) that returns a NEW
// object containing the student's name, total, average, and grade (A+ for 90+, A for 80+,
// B for 70+, F below 70).  

function generateReportCard(student) {
    if (!(typeof student === "object") || Array.isArray(student)) {
        return "Invalid"
    }
    else {
        let arrayOfSubject = []
        for (const key in student) {
            if (key === "name") {
                continue

            }
            else {
                arrayOfSubject.push(key)

            }


        }
        let sumOfSub = 0
        for (const sub of arrayOfSubject) {
            if (!(typeof student[sub] === "number")) {
                return "Invalid"
            }
            else {
                sumOfSub += student[sub]
            }

        }
        let avg = sumOfSub / arrayOfSubject.length
        if (avg >= 90) {
            return { name: student["name"], total: sumOfSub, average: avg, grade: "A+" }
        }
        else if (avg >= 80) {
            return { name: student["name"], total: sumOfSub, average: avg, grade: "A" }
        }
        else if (avg >= 70) {
            return { name: student["name"], total: sumOfSub, average: avg, grade: "B" }
        }
        else {
            return { name: student["name"], total: sumOfSub, average: avg, grade: "F" }
        }
    }

}


console.log(generateReportCard({ name: 'Ayan', bangla: 78, english: 85, math: 92 }));
console.log(generateReportCard({ name: 'Rafi', bangla: 78, english: 85, math: 92, ict: 65 }));
console.log(generateReportCard({ name: 'DK', bangla: 56, english: 68, math: 80, ict: 65 }));
console.log(generateReportCard({ name: 'DK', bangla: 'tom', english: 68, math: 80, ict: 65 }));
console.log(generateReportCard(["name: 'DK'"]));
console.log(generateReportCard([0,4,5,6,]));
console.log(generateReportCard({ name: 'JK', bangla: 90, english: 92}));