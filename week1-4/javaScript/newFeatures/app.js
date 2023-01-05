// ****   NEWER JAVASCRIPT FEATURES ****//
//DEFAULT PARAMS
//SPREAD IN FUNCTION CALLS
//SPREAD WITH ARRAY LITERALS
//SPREAD WITH OBJECTS
//REST PARAMS
//DESTRUCTURING ARRAYS
//DESTRUCTURING OBJECTS
//DESTRUCTURING PARAMS


// ******   DEFAULT PARAMS  ***** //

//     OLD WAY   //

// function multiply(a,b){
//     b = typeof b !== 'undefined' ? b: 1;
//     return a * b; 
// }

// console.log(multiply(12));


// function rollDice(numSides) {
//   if(numSides === undefined){
//     numSides = 6;
//   }
//   return Math.floor(Math.random() * numSides) + 1; 
// }

// console.log(rollDice());


//    NEW WAY   //

// function multiply( a, b = 1){
//   return a * b;
// }

// console.log(multiply(2));
// console.log(multiply(2,20));


// function rollDice(numSides = 20) {
//   return Math.floor(Math.random() * numSides) + 1; 
// }

// console.log(rollDice());

// function greet (person, msg ="hey there", punc='!') {
//       console.log( ` ${msg} , ${person}${punc}`);
// }

// *****                END                       *****//

//        SPREAD in Funciton Calls                    //

// const nums = [13,4,5,21,3,31,44444444];

// console.log(Math.max(...nums));

// console.log("asd" , 'as','asada','dadsadasda');

// console.log('hello');
// console.log(... 'hello');

// just adding the spread syntax (... element/array) we can spread the and iterable element or array.

// *****                END                       *****//

//        SPREAD in Array literals                    //

// const cats = ['blue','Scout','Rocket'];
// const dogs = ['Rusty', 'batatya'];

// const allPets = [...cats, ...dogs];  // combining two arrays 

// const allPets1 = [1,2,3,...cats, ...dogs,'habibi'];  // combinig two arrays and pushing new elements

// const hello = ["helloa"];
// console.log(...hello[0]); // accessing string inside an array

// *****                END                       *****//

//               SPREAD in Objects                   //

// const feline = { legs: 4, family: 'Felidae'};
// const canine = { family: 'Caninae' , furry: true };

// const dog = {...canine, isPet: true };

// const lion = { ...feline, genus: 'Panthera'};

// const catDog = { ...feline, ...canine};

// const dataFromForm = { 
//           email : 'andraa@gmail.com',
//           password : 'ss@das11',
//           username : 'fakename'
// }

// const newUser = {...dataFromForm, id:222, isAdmin: true };


// *****                END                       *****//