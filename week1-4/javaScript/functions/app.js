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