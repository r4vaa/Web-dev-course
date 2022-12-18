// LOOPS
//LOOPS Allows us to repeat code
//print "hello" 10 times
//sum all numbers in an array
// there are multiple types

//syntax
// for(let i = 1; i <= 10; i++){
//   console.log(i);
// }

//Loop Practice
// Use a for loop to print out the string "Da ba dee da ba daa" exactly 6 times.  No more, and no less.
//for(let i=1; i <= 6; i++){
//   console.log(i + " " +"Da ba dee da ba daa");
// }

//print even number
// for(let i = 0; i <= 20; i += 2){
//   console.log(i);
// }
// //print odd numbers
// for(let i = 1; i<=20; i += 2){
//   console.log(i);
// }
//subtraction
// for(let i = 100; i >= 0; i-=10){
//   console.log(i);
// }

//Multiplication
// for(let i = 10; i <=100000000000; i *=10){
//   console.log(i);
// }
//Infinite Loop
//DOnot use this loop
// for(let i =20; i >=0; i++){
//   console.log(i);
// }

//LOOPING ARRAYS
// const animals = ['lions','tigers','bears'];

// for(let i =0; i < animals.length; i++){
//   console.log(i, animals[i]);
// }



// for(let i = animals.length -1; i >= 0; i--){
//   console.log(i, animals[i]);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// for(let i = 0; i<= people.length; i++){
//   console.log(people[i].toUpperCase());
// }

//NESTED LOOP
// let str = 'LOL';

// for(let i = 0; i <= 4; i++){
//   console.log("Outer:", i);
//   for (let j = 0; j < str.length; j++){
//     console.log('          Inner:', str[j]);
//   }
// }

// for (let i = 0; i <=10 ; i++){
//   console.log(`i is: ${i}`);
//       for(let j = 1; j < 4; j++){
//         console.log(`     j is: ${j}`);
//       }

// }
//seating chart loop very difficult but easy
// const seatingChart = [ 
//   ['dheeraj','piyu','marry'],
//   ['mom','dad','brother',"sister"],
//   ['uncle','aunty','nephew','neice']
// ] 

// for(let i = 0; i < seatingChart.length; i++){
//   console.log(`ROW for 1st array ${i + 1}`);
//   const row = seatingChart[i];
//    for (let j = 0; j < row.length ; j++ ){
//     console.log(row[j]);
//    }
// } 


//WHILE LOOP
//let count = 0;
// while(count < 10){
//   count++;
//   console.log(count);
// }

// const SECRET = "babyHippo";

// let guess = prompt("enter the secret code ..");

// while(guess !== SECRET){
//   guess = prompt("enter the secret code ..");;
// }
// console.log("Congrats");

//BREAK KEYWORD

// let input = prompt("hey Say Something");

// while(true){

//   input = prompt(input);

//   if (input === 'quit') break;
// }
// console.log("ok you win");

//FOR OF

// const subreddits = ['cringe', 'funny','notFunny',"hot",'spicy'];

// for (let i = 0 ; i < subreddits.length; i++){
//   console.log(`Visit subreddits/${subreddits[i]}`);
// }

// for (let sub of subreddits){
//   console.log(`Visit Subreddits/${sub}`);
// }

// const seatingChart = [ 
//     ['dheeraj','piyu','marry'],
//     ['mom','dad','brother',"sister"],
//     ['uncle','aunty','nephew','neice']
//   ];


  // for(let i=0; i < seatingChart.length;i++){
  //   const row = seatingChart[i];
  //   console.log(`first itertaion`);
  //   for(let j=0;j < row.length; j++){
  //     console.log(row[j]);
  //   }
  // }

  // for (let row of seatingChart){
  //   for(let student of row){
  //     console.log(student);
  //   }
  // }