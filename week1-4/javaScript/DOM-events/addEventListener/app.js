//           DOM Events              //

// const btn = document.querySelector("#v2");

// btn.onclick = function(){
//   console.log('You clicked me!');
//   console.log("i Hope it worked!");
// }

// function scream(){
//   console.log('AAAAA');
//   console.log('stop touching me');
// }

// btn.onmouseenter = scream;


// document.querySelector('h1').onclick = function () {
//   alert('you clicked me');
// }

// document.querySelector('h1').onclick = () => { 
//     alert('you clicked me!')
// }

// const btn3 = document.querySelector('#v3');
// btn3.addEventListener('click', function() {
//       alert('CLICKED');
// });

// function dontScream(){
//   console.log('dontScream');
// }

// btn3.addEventListener('click', scream);
// btn3.addEventListener('click', dontScream);

//practice

// const helloBtn = document.querySelector('#hello');
// const byeBtn = document.querySelector('#goodbye');

// helloBtn.addEventListener('click',function(){
//     console.log('hello');
// })

// byeBtn.addEventListener('click',function(){
//     console.log('goodbye')
// })

//                  random color generator         //





const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click',function(){
  const newColor =  makeRandColor();
  document.body.style.backgroundColor= newColor;
  h1.innerText = newColor;
  console.log(makeRandColor()); 
});

const makeRandColor = () =>{
  const redColor = Math.floor(Math.random()*255)+1;
  const greenColor = Math.floor(Math.random()*255)+1;
  const blueColor = Math.floor(Math.random()*255)+1;
  const sum = redColor + greenColor + blueColor;
  if(sum < 300){
    h1.style.color = 'white';
  } else{
        h1.style.color="black";
    }
 
  return `rgb(${redColor},${greenColor},${blueColor})`;
}



