// function printHeart(){
//   console.log("<3");
// }

// printHeart();
// function sing() {
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// }
// sing();

// function greet(person){
//   console.log(`hi ${person}`);
// }
// greet("manish");
// greet("dheeraj");

// function rollDice(person){
//   let dice = Math.floor(Math.random()*6)+1;
//   console.log(`${person} got this: ${dice}`);
// }
 
// rollDice("dheeraj");
// rollDice("Manish");
// rollDice("Meet");

// function rant(message){
//   console.log(message.toUpperCase());
// }

// rant("I hate beets");
// rant("I hate beets");
// rant("I hate beets");

// function rant(message){
//   console.log(message.toUpperCase());
//   console.log(message.toUpperCase());
//   console.log(message.toUpperCase());
// }

// rant("I hate beets");
// function greet(firstName, lastName){
//   console.log(`Hey there, ${firstName} ${lastName[0]}.`);
// }

// greet('Dheeraj','Patil');
// greet('Patil','Dheeraj');

// function repeat(str, numTimes){
//    let result = '';
//      for(let i=0;i < numTimes;i++){
//       result += str;
//      }
//      console.log(result);
// }

// repeat(' * ',5);
// repeat(' * ',4);
// repeat(' * ',3);
// repeat('  * ',2);
// repeat('   *',1);


//CONCATENATION STR + STR = STR STR || STR1 += STR2 =  STR1STR2
// Multiple Args Exercise
// In some dice games like Craps, a roll of two 1's is called "Snake Eyes".  It's generally not a good roll.  Please write a function called isSnakeEyes, which accepts two numbers as inputs, representing two dice.  If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"

// isSnakeEyes(1,1) //Snake Eyes!
// isSnakeEyes(1,5) //Not Snake Eyes!
// isSnakeEyes(4,5) //Not Snake Eyes!'


// function isSnakeEyes(num1,num2){
//       if(num1 === 1 && num2 === 1){
//         console.log("Snake eyes");
//       }else{
//         console.log("not snake eyes");
//       }
// }

// isSnakeEyes(2,2);
// isSnakeEyes(1,5);
// isSnakeEyes(4,5);

//RETURN

// function add (x,y){
//   let sum = x + y;
//   return sum;
// }

// console.log(add(9,4));


// function multiply(num1,num2){
//   let multiplication = num1 * num2;
//   return multiplication;
// }

// function isShortsWeather(temp){
//   if(temp >= 75){
//     return true;
//   }else{
//     return false;
//   }
// }

// function lastElement(num){
 
//    if(num.length === 0){
//     return null;
//    }else{
//     return num[num.length -1];
//    }
// }

// function capitalize(str){

//   let alpha = str.slice(0,1).toUpperCase();
//   let newAlpha = str.replace(str.charAt(),alpha);
//   return newAlpha; 

// }


// function sumArray(arr){
//   let total= 0;
//   for(let i = 0; i < arr.length;i++){
//     total += arr[i];
//   }return total;
// }

// function returDay(x){
//   switch(x){
//     case 1:
//       return 'Monday'
//       break;
//       case 2:
//         return 'Tuesday'
//         break;
//         case 3:
//         return 'Wednesday'
//         break;
//         case 4:
//         return 'Thursday'
//         break;
//         case 5:
//         return 'Friday'
//         break;
//         case 6:
//         return 'Saturday'
//         break;
//         case 7:
//         return 'Sunday'
//         break;

//         default:
//           return null
//           break
//   }
// }


// const days = {
//   1: 'Monday',
//   2: "Tuesday",
//   3: "Wednesday",
//   4: "Thursday",
//   5: "Friday",
//   6: "Saturday",
//   7: "Sunday"
// }

// function returnDay (number)  {
//   if(number < 1 || number > 7) {
//       return null;
//   }
//   return (days[number])
// }

// const days = {
//     1: 'Monday',
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday",
//     7: "Sunday"
//   }

//   function returnDay(num){

//     if(num < 1 || num >7){
//       return null;
//     }else{
//       return days[num];
//     }
//   } 

//SCOPE Variable "  VISIBILITY "

// function collectEggs(){
//   let totalEggs =6;     // function scope- total eggs is scoped to the collect eggs function
// }

// totalEggs;

// let bird = 'Scarlet Macaw';
// function birdWatch(){
   // let bird = 'Great Blue Heron';
//   console.log(bird);    
// }
// birdWatch()
// console.log(bird)

