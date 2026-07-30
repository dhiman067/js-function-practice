// MailBox Pro, an email management system, wants to analyze a sentence
// containing email addresses. Write a function analyzeEmailDomains(text) that returns
// an object containing the total number of email addresses and the longest email
// domain (the part after @).  

// let boy = 'support@gmail.com'
// let array = boy.split("@")
// // array.splice(0, array.indexOf("@")+1)

// console.log(array); 


function analyzeEmailDomains(text) {
    if (typeof (text) !== "string") {
        return "Invaild"
    }
    else if(!(text.includes("@"))){
        return{emailCount:0, longestDomain: ""}
    }
    else {
        let arrayOfTheText = text.split(" ")
        let emailCount = 0
        let string = ""
        let arrayOfMailDomain = []
        for (const elements of arrayOfTheText) {
            if (elements.includes("@")) {
                emailCount++
                string = elements
                 let array = string.split("")
                array.splice(0, array.indexOf("@")+1)
                let mailDomain = array.join("")
                arrayOfMailDomain.push(mailDomain)

            }
            
            
        }
        let arrayOfLengthOfTheDomain = []
       for(const lengthOfMailDomain of arrayOfMailDomain){
        let lengthOfDomain = lengthOfMailDomain.length
        arrayOfLengthOfTheDomain.push(lengthOfDomain)
       }
       let lengthOfLargeDomain = Math.max(...arrayOfLengthOfTheDomain)
       for(const domain of arrayOfMailDomain){
        if(lengthOfLargeDomain === domain.length){
            return{emailCount:emailCount, longestDomain: domain}
        }
        
       }
    }
}

console.log(analyzeEmailDomains("Contact support@gmail.com admin@yahoo.com info@programminghero.com dp119@gehoto.com"));
console.log(analyzeEmailDomains("Contact support@gmail.com admin@yahoo.com info@programminghero.com"));
console.log(analyzeEmailDomains("Hello everyone!"));