// Write a function isLeapYear(year) that returns true if the year is a leap
// year. Rule: divisible by 4 AND (not divisible by 100 OR divisible by 400). 

function isLeapYear(year){
    if(!(typeof(year)=== "number")){
        return "Invalid"
    }
    else{
        if(year % 4 === 0 && ((year % 100 !== 0) || (year % 400 === 0))){
            return true
        }
        else{
            return false
        }
    }
}
console.log(isLeapYear(2024));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));