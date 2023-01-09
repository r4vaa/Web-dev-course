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

//                     REST Params                   //

// function sum() {
//   return arguments.reduce((x,y) =>{
//     return x + y;
//   })
// } this will not work

//Rest Params
// function sum(...nums){

//   return nums.reduce((total,el) => total + el );

// }

// function raceResults(gold,silver,...everyoneElse){
//   console.log(`GOLD medal goes to: ${gold}`);
//   console.log(`SILVER medal goes to: ${silver}`);
//   console.log(`And thanks to everyone else : ${everyoneElse}`)
// }

// raceResults('Dheeraj','manish','priyanka','pranay','mummy','pappa');


// *****                END                       *****//

//                     Destructuring Arrays                   //


// const scores = [929321,899341,888336,772739,543671,243567,111934];

// const [gold, silver, bronze,...everyoneElse] = scores;

// const raceResults = [ 'Dheeraj','Manish', 'Priyanka','dheerya','hagrya'];

// const [gold, silver , bronze, ...everyoneElse] = raceResults;

// instead of writing we can use destructuring arrays concepts.were we can give the arrays a distinct variable.

// const gold = scores[0];

// *****                END                       *****//


//                     Destructuring Objects                  //


// const user =  {
//       email : 'patildheeraj56@yyy.com',
//       password : 'sdadasd',
//       firstName : 'Dheeraj',
//       lastName : 'Patil',
//       born : 1995,
//       died : 'Not yet',
//       bio : 'Currently AML analyst, working for hudl',
//       city : 'Vasai',
//       state : 'Maharashtra'
// }

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// const {email, firstName, lastName,bio } =  user;

// renaming and object property to a new one with destructuring objects

// const { born : birthYear, died : deathYear} = user;


// const user2 = {
//           email : 'patilp56@yyy.com',
//           password : 'sdadasd',
//           firstName : 'Priyanka',
//           lastName : 'Patil',
//           born : 1995,
//           city : 'KOkan',
//           state : 'Kankavali'
// }

// givin a default value to an object propety which is not in the object

// const {died ='N/A', born, bio} = user2;


// *****                END                       *****//


//                     Destructuring Params            //


const user =  {
        email : 'patildheeraj56@yyy.com',
        password : 'sdadasd',
        firstName : 'Dheeraj',
        lastName : 'Patil',
        born : 1995,
        died : 'Not yet',
        bio : 'Currently AML analyst, working for hudl',
        city : 'Vasai',
        state : 'Maharashtra'
  }

function fullName(user){
    const {firstName, lastName } = user;
  return ` ${firstName} ${lastName}`;
}

function fullName({firstName,lastName}){
          return `${firstName} ${lastName}`
}


const movies =[ 
  {
    title :' One piece',
    score : 99,
    year : 1995
  },
  {
    title :'two round',
    score : 90,
    year : 1994
  },
  {
    title :'teri dewani',
    score : 98,
    year : 2010
  },
  {
    title :'everything for veryone',
    score : 89,
    year : 2111
  },
  {
    title :'Not worth it',
    score : 88,
    year : 1994
  },
  {
    title :'Kala kawwa',
    score : 91,
    year : 1933
  }
]

movies.filter((movie) => {
  return movie.score >= 90;
})

movies.filter(({score}) => score >=90 );

movies.map( movie => {
  return `${movie.title} (${movie.year} is rated ${movie.score})`
})

movies.map(({title,year,score})=> {
  return `${title} (${year} is rated ${score})`
})

// *****                END                       *****//