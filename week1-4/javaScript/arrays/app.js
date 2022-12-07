// BASIC ARRAY'S

// const days  = ['Monday','Tuesday','Wedensday','Thursday'];
// console.log(days[1]);
// console.log(days.length);

//ARRAY METHODS
//PUSH ,POP,SHIFT,UNSHIFT - COMMONLY USED 
//CONCAT, INCLUDES, INDEXOF,JOIN ,REVERSE, SLICE, SPLICE,SORT

//PUSH AND POP.
//let barbell = [];
// barbell.push(45) 
//barbell.push(10)
//barbell.push(25)
//barbell.push(50)
//barbell.push(60)
// this above code will add these weights to the array


//barebell.pop();
//this code will remove the last value of that array for us 60 will be removed from that array


//SHIFT AND UNSHIFT
// let movieLine = ['dheeraj','piyu'];
// movieLine.shift(); dheeraj will be removed
// movieLine.shift();  piyu will be removed

// this above code will remove the values from the array from start.

//movieLine.unshift("VIP"); VIP will be added at the start of the array.

// PUSH POP SHIFT UNSHIFT PRACTICE
// const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; 

// planets.shift();
// planets.push('Saturn');
// planets.unshift('Mercury');

//COMMONLY USED ARRAY METHODS
// const array1 = ['a','b','c','d'];
// const array2 = ['e','f','g','h'];
// array1.concat(array2); this will merge the array2 in array1 but it will not make changes in the original array so we will need it to save in another array.

// array1.includes('a');
//LOOKS FOR THE VALUE GIVEN IN ARGUMENT.
//array1.indexOf('a') gives the index of that value.
//array1.reverse() 
//REVERSE'S THE VALUE OF THAT ARRAY.


//SLICE
//SLICE COPIES THE VALUES FROM THE ARRAY, GIVEN ARGUMENT
//array1.slice(4); this will provide array values from the index 4;
// op-e,f,g,h
//array.slice(0,4); this will give you the op from 0 to 3; 4 is not the end;

//SPLICE
//SPLICE REPLACES OR REMOVES THE ELEMENTS
//array1.splice(1,0,'a'); this will add an element after the 1st index value and will not delete anything as delete count is 0;
//array1.splice(1,1,'e'); this will delete the 1 element from the 1st index value and will add 'e' at the 1st ;