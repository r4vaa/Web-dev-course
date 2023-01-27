// const multiply = (x,y) => x * y ;

// const square =(x) => multiply(x,x);

// const isRightTriangle = (a,b,c) =>{
//   return square(a) + square(b) === square(c);
// }

// console.log("before");
// isRightTriangle(3,4,5);
// console.log('done');

//          CALLBACK HELL


// setTimeout(() => {
//   document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//       document.body.style.backgroundColor = 'orange';
//        setTimeout(() =>{
//           document.body.style.backgroundColor = 'blue';
//             setTimeout(() => {
//               document.body.style.backgroundColor = 'Teal';
//                 setTimeout(() => {
//                   document.body.style.backgroundColor = 'yellow';
//                 },1000)
//               },1000)
//           },1000)
//       },1000)
// },1000)


// const delayedColor = (newColor, delayed , doNext) => {
//         setTimeout(() => {
//           document.body.style.backgroundColor = newColor;
//          doNext && doNext();
//         },delayed)
// }

// delayedColor('teal',1000, () => {
//   delayedColor('green',1000, () => {
//     delayedColor('blue',1000, () => {
//       delayedColor('red',1000, () => {
//         delayedColor('pink',1000, () => {
//         })
//       })
//     })
//   })
// });


