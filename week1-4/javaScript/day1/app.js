//IF-ELSE Conditional Statement

// console.log("BEFORE CONDITIONAL")
// if(1 + 2 === 2){
//   console.log("Math still works!")
// }

// console.log("AFTER CONDITIONAL")

// let random = Math.random();

// if( random < 0.5){
//   console.log("YOUR NUMBER IS LESS THAN 0.5!!");
//   console.log(random);
// }

// if(random > 0.5){
//   console.log("YOUR NUMBER IS GREATER THAN 0.5!!");
//   console.log(random);
// }

// let num = 19;

// if(num % 2 === 0){
//   console.log("even")
// }

// const dayOfWeek = prompt("enter a day:").toLowerCase();

// if(dayOfWeek === 'friday'){
//   console.log("its funny");
// }else if(dayOfWeek === 'tuesday'){
//   console.log("its no funny");
// }else if(dayOfWeek ===  'monday'){
//   console.log("its fucking hell day");
// }
// else{
//   console.log("MEH");
// }
//  
// Nesting CONDITIONAL STATEMENTS
// const password = prompt("enter a password:");

// if(password.length >= 6){
//   if(password.indexOf(" ") === -1){
//     console.log("Valid Password")
//   }else {
//     console.log("password cannot contain spaces");
//   }
// }else {
//   console.log("password is too short! must have 6+ characters");
// }
// NESTED CONDITIONALS PRACTICE
// const num =102;

// if(num <= 100){
//   if(num >= 50){
//     console.log("HEY!");
//   }
// }else{
//   if(num < 103){
//     if(num % 2 === 0){
//       console.log("you got me!!!");
//     }
//   }
// }

//TRUTHY AND FALSY VALUES
//ALL JS VALUES HAVE AN INHERENT TRUTHLYNESS AND FALSYNESS ABOUT THEM.
// FALSY vALUES
//FALSE, 0 , ""(EMPTY STRING), NaN, null, UNDEFINED.

// const userInput = prompt("enter your name");

// if(userInput){
//   console.log("TRUTHY!!");
// }else {
//   console.log("FALSY!!");
// }

// if(0){
//   console.log("TRUTHY");
// }else {
//   console.log("FALSY");
// }

// if(NaN){
//   console.log("TRUTHY");
// }else {
//   console.log("FALSY");
// }

// if(""){
//   console.log("TRUTHY");
// }else {
//   console.log("FALSY");
// }

// if(undefined){
//   console.log("TRUTHY");
// }else {
//   console.log("FALSY");
// }

// LOGICAL OPERATORS
//AND && OPERATOR

// const password = prompt("Enter your password");

// if(password.length >= 6  && password.indexOf(" ") === -1){
//   console.log("Valid Password")
// }else {
//   console.log("INCORRECT PASSWORD FORMAT!!");
// }

// const mystery = 'Passwor7';

// if(mystery[0]='P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
//   console.log("you got it")
// }