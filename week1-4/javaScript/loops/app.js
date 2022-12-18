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

  // for (char of "hello world"){
  //   console.log(char);
  // }

//Practice of For of
  // const numbers = [1,2,3,4,5,6,7,8,9]; 

  // for (let num of numbers){
  //   console.log(num*num);
  // }

  // let testScores = {
  //   dheeraj : 89,
  //   piryanka : 99,
  //   manish : 87,
  //   pranay : 75,
  //   didi : 100,
  //   guddu : 99.5,
  //   divya : 98,
  //   pinky : 89 
  // };


  // for  (let score in testScores) {
  //     console.log(`${score} scored ${testScores[score]} `);
  // }
// let total = 0;
// let scores = Object.values(testScores);

//   for(let score of scores ){
//      total += score;
     
//   }

//   console.log(total / scores.length);
// let scores= Object.values(testScores);
// let total = 0;
// for(let i =0; i < scores.length; i++){
//   total += scores[i]
 
// }

// console.log(total / scores.length);

//TODO LIST

  // TODO DELETE an value from an array
  //toDoList = ["app","add","delete","undo"];
// let toDelete = parseInt(prompt("Give the index no you want to delete"));
// while(!toDelete){
//     toDelete = parseInt(prompt("Give a valid number"));
// }
// toDoList.splice(toDelete,1);
// console.log(toDoList);

//to do list

let input = prompt('what would you like to do');
const todos = ['Collect Chicken eggs','Clean Litter Box'];


while( input !== 'quit' && input !=='q' ){
   if( input === 'list'){
    console.log("************");
    for(let i = 0; i < todos.length; i++){
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("**********");
  }else if(input === 'new'){
    const newToDo = prompt("Ok!, what is your new Todo");
    todos.push(newToDo);
    console.log(`${newToDo} added to your list`);
  }else if(input === 'delete'){
    const index = parseInt(prompt("Enter the index no you want to delete"));
    if(!Number.isNaN(index)){
      const deleted = todos.splice(index,1);
      console.log(`Ok, deleted,${deleted[0]}`);
    }
    
  }
  input = prompt('what would you like to do');
}
console.log('\n');
console.log("THIS IS THE LIST THAT YOU CREATED");
console.log("***********");
for(let i = 0; i<todos.length;i++){
 console.log(`${i}: ${todos[i]}`);
}

console.log("OK!, you quit the app")