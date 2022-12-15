let maximum = parseInt(prompt("Enter a Maximum Number"));

while(!maximum){
  maximum = parseInt(prompt("Enter a Valid number"));
}



const targetNum = Math.floor(Math.random()*maximum) + 1;
console.log(targetNum);

let guess = prompt("Enter you first guess");
let attempts = 1;

while(parseInt(guess) !==  targetNum){
  if(guess === 'q') break;
    attempts++;
  if( guess > targetNum){
    guess = prompt("Too high, enter a new guess");
  }else if(guess < targetNum){
    guess = prompt("Too low, eneter a new guess");
  }else{
    guess = prompt(`Your guess is ${guess}, its not higher nor lower! please enter a valid number`);
  }
}

 if(guess === 'q'){
  console.log("You quit the game");
 }else{
   console.log("Congrats you got it");
   console.log(`you got it!, it took ${attempts} guesses`);
 }
































// let maximum = parseInt(prompt("Enter you a Guess!"));

// while(!maximum){
//   maximum = parseInt(prompt("Enter a number!"))
// }

// const targetNum = Math.floor(Math.random()* maximum)+1;
// console.log(targetNum);

// let guess = parseInt(prompt("Enter your first guess"));
// let attempts = 1;

// while(parseInt(guess) !== targetNum){

//     if(guess === 'q') break;
//     attempts++;
//   if(guess > targetNum ){
//     guess = prompt("Too high! Enter a new guess");
//   }else {
//     guess = prompt("Too low!, Enter a new guess!");
//   }
// }
// if(guess === 'q'){
//   console.log("ok, you quit");
// }else{
//   console.log("Congrats");
//   console.log(`You got it, it took you ${attempts} guess`);
// }

