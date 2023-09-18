//store the value of my current age
const myAge = 28; //constant variable named myAge that is assigned a value of 28.

//store the value of 2
let earlyYears = 2; //the first two human years of a dogs life count as 10.5 dog years each
earlyYears *= 10.5;

let laterYears = myAge - 2; //subtracting 2 human years from my current age since they were accounted for with earlyYears

laterYears *= 4; //1 human year is equal to 4 dog years after the first two. so we multiply whats left in laterYears after the subtraction by 4

//test to make sure variables are correct before doing more math
console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears; //add the variables to calculate your age in dog years

let myName = "Brandon".toLowerCase(); //assigns the value "Brandon" to the variable myName and makes the string lowercase

//Statement written to the console using the myName, myAge, and myAgeInDogYears variables using string interpolation.
console.log("My name is " + myName + "." + " I am " + myAge + " years old. Which means I am " + myAgeInDogYears + " years old in dog years. " )

document.write("My name is " + myName + "." + " I am " + myAge + " years old. Which means I am " + myAgeInDogYears + " years old in dog years. " )