//           DOM Events              //

// const btn = document.querySelector("#v2");

// btn.onclick = function(){
//   console.log('You clicked me!');
//   console.log("i Hope it worked!");
// }

function scream(){
  console.log('AAAAA');
  console.log('stop touching me');
}

// btn.onmouseenter = scream;


// document.querySelector('h1').onclick = function () {
//   alert('you clicked me');
// }

// document.querySelector('h1').onclick = () => { 
//     alert('you clicked me!')
// }

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function() {
      alert('CLICKED');
});

function dontScream(){
  console.log('dontScream');
}

btn3.addEventListener('click', scream);
btn3.addEventListener('click', dontScream);

//practice

// const helloBtn = document.querySelector('#hello');
// const byeBtn = document.querySelector('#goodbye');

// helloBtn.addEventListener('click',function(){
//     console.log('hello');
// })

// byeBtn.addEventListener('click',function(){
//     console.log('goodbye')
// })