//CALLBACKS AND ARRAY METHODS
// **** IMPORTANT TOPICS  ******//

//FOREACH
//MAP
//Arrow Functions
//Filter
//Some & Every
//REDUCE

// for each

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];



// numbers.forEach(function (el){
//    if(el % 2 === 0 ){
//     console.log(el)
//   }
// })


// const movies = [
//   {
//     title : 'one piece',
//     score : 90
//   },
//   {
//     title : 'naruto',
//     score : 99
//   },
//   {
//     title : 'parasite',
//     score : 95
//   },
//   {
//     title : 'Alien',
//     score : 93
//   },{
//     title : 'Predator',
//     score : 91
//   }
// ];

// movies.forEach(function(movie){
//   console.log(`${movie.title} ${movie.score}/100`);
// })

// THE MAP Method

// const texts = ['rofl','lol','omg','ttyl']
// const caps = texts.map(function(t){
//    return t.toUpperCase() ;
// })

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
// const double = numbers.map(function(num){
//   return num * 2;
// })



// const movies = [
//     {
//       title : 'one piece',
//       score : 90
//     },
//     {
//       title : 'naruto',
//       score : 99
//     },
//     {
//       title : 'parasite',
//       score : 95
//     },
//     {
//       title : 'Alien',
//       score : 93
//     },{
//       title : 'Predator',
//       score : 91
//     }
//   ];

//   const titles = movies.map(function(movie){
//     return movie.title.toUpperCase();
//   }) 
// Map Practice
// It's time to get practice with the map method!

// Define a variable named firstNames and assign it to the result of mapping over the existing array, fullNames, so that firstNames contains only the first names of the Harry Potter characters from the fullNames array.


// Please note:

// The fullNames array is an array of objects with each object containing properties for the first and last names of each character. You may need to click the "Reset code" link if you do not see the fullNames array pre-loaded into the exercise's index.js file.

// This exercise has been updated, you may see Q&A threads from this lecture that relate to the original exercise which no longer exists. They can be ignored.

// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];


// const firstNames =  fullNames.map(function(name){
//   return name.first;
// })

// Arrow Function

// const square = (x) => {
//   return x * x;
// }
// console.log(square(4));

// const sum = (x,y) => {
//   return x + y;
// }

// const rollDie = () => {
//   return Math.floor(Math.random()*6)+1;
// }

//if we have a single parameter we can pass a parameter without adding parenthesis , example shown below

// const square = x => {
//   return x * x;
// }

// const greet = name => {
//   return `hey ${name}`;
// }

//IMPLICIT RETURN
//implicit return work only when we have one and only on expression


// const rollDie = () => (
//   Math.floor(Math.random() * 6)+1
// )
 
// const isEven = num =>  num % 2 === 0;

// const add = (a,b) => a + b

//non implicit return

// const rollDie = () => (
//   let msg = 'addd'
//   Math.floor(Math.random() * 6) +1;
// )
// above code wont work.