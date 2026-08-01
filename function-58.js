// একটি Fitness App-এর পুরানো ES5 Function কে Arrow Function এ Refactor করতে হবে। Function টি Weight (kg) এবং Height (m) নিয়ে BMI বের করবে।  

const calculateBMI = (weight, height) => {
    if (weight === 0 || weight < 0 || height === 0 || height < 0) {
        return "Invalid"
    }
    else {
        let BMI = weight / (height * height)
        return Number(BMI.toFixed(2))
    }


}
console.log(calculateBMI(70, 1.75))
console.log(calculateBMI(50, 1.6))
console.log(calculateBMI(50, -1.6))