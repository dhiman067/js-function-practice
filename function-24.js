// Write a function checkTemperature that takes a temperature (in Celsius) and returns "Hot" if it is 30 or above, "Cold" if it is 15 or below, and "Normal" otherwise. 


function checkTemperature(temp) {
  if(temp>=30){
    return 'Hot'
  }
  else if(temp<=15){
    return 'Cold'
  }
  else{
    return 'Normal'
  }
 
}
console.log(checkTemperature(35)); 
console.log(checkTemperature(10)); 
console.log(checkTemperature(20));
