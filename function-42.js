function totalFine(fare) {
    if (!(typeof (fare) === "number") || !(fare > 0)) {
        return "Invalid"
    }
    else {
        let total_fine = fare + (fare * 20 / 100) + 30
        return total_fine
    }


}
console.log(totalFine(200));
console.log(totalFine(50));
console.log(totalFine(552));
console.log(totalFine(500));
console.log(totalFine(0));
console.log(totalFine("taka nai"));
console.log(totalFine(-35));



