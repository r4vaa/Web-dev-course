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

// const creature ="Common Sea Dragon";

// function scubaDriver () {
//    const creature = 'Spanish Dancer';
//    console.log(creature);
// }

// scubaDriver();

                           //BLOCK SCOPE

//  let radius = 8;
//  if(radius > 0){
//    const PI = 3.14159;
//    let msg = 'HIIII!'
//  }                          

//  console.log(radius);
//  console.log(msg); 

// for(let i =0; i < 5;i++){
//    console.log(`${i}, hii`);
// }

// console.log(i);


//                    LEXICAL SCOPE

// function bankRobbery(){
//    const heroes = ['Spiderman','wolverine','black Panther','wonder woman'];
        
//    function cryForHelp(){
//          let color = 'Purple';
//       function inner(){
//          for(let hero of heroes){
//          console.log(`please Help us,${hero.toUpperCase()}`);
         
//       }  
//       console.log(color);
//       }
//       inner();
//    }
//    cryForHelp();
// }
// bankRobbery(); 

//              FUNCTION EXPRESSION
// function are used a values in javascript we can do allot with functions
// const sum = function(x,y){
//    return x + y;
// }
// console.log(sum(7,8));


// const square = function(x){
//    return x * x ;
// }

//             HIGHER ORDER FUNCTION


// function callTwice(func){
//    func();
//    func();
// }
// function rollDices(f){
//    for(let i = 0; i < 10 ; i++){
//          f();
//    }
// }

// function rollDie(){
//    const roll = Math.floor(Math.random()*6)+1;
//    console.log(roll);
// }

// rollDices(rollDie);


//             RETURNING FUNCTIONS


// function makeMysteryFunction(){
//    let rand = Math.random();
//    if(rand > 0.5){
//       return function(){
//          console.log("You got the good function");
//          console.log("YOu win thenga");
//       }
//    }else{
//       return function(){
//          alert("You got a virus");
//          alert("DO NO CLOSE THIS WINDOW");
//          alert("DO NO CLOSE THIS WINDOW");
//          alert("DO NO CLOSE THIS WINDOW");
//          alert("DO NO CLOSE THIS WINDOW");
//       }
//    }
// }


// function makeBetweenFunction(min,max){
//    return function(num){
//       return num >= min && num <= max;
//    }
// }

// const isChild = makeBetweenFunction(0,18);
// const isAdult = makeBetweenFunction(19,65);
// const isSenior = makeBetweenFunction(65,120);

//           METHODS

// const math = {
//    multiply : function(x,y){
//       return x * y; 
//    },
//    divide : function (x,y){
//       return x / y;
//    },
//    square : function(x,y){
//       return x*x;
//    }
// }

//  SHORTHAND METHOD

// const math = {
//    multiply (x,y){
//       return x * y;
//    },
//    add (x , y){
//       return x + y; 
//    },

//    divide(x,y){
//       return x / y;
//    }
// }