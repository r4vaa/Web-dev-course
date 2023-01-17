// const allLinks = document.querySelectorAll('a');

// // for (let link of allLinks) {
// //     link.innerText = 'I AM A LINK!!!!'
// // }


// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }
 
// document.querySelector('h1').innerText selects only the text

// const allLinks = document.querySelectorAll('a');

// for(let link of allLinks){
//     link.innerText = 'I AM A LINK!!'; 
// }

// document.querySelector('h1').innerHTML = '<i>HELLO</i>';  gives all the content with html, add elements



// document.querySelector('#banner');

// document.querySelector('#banner').id;
// 'banner'
// document.querySelector('#banner').id = 'whoops';
// 'whoops'
// document.querySelector('#whoops').id = 'banner';
// 'banner'

// document.querySelector('#banner').src;

// document.querySelector('a').href;
// document.querySelector('a').title;


// const firstLink = document.querySelector('a');

// firstLink.setAttribute('href','https://www.google.com');

// firstLink.getAttribute('href');
// 'https://www.google.com'
// firstLink.href
// 'https://www.google.com/'
// document.querySelectorAll('input')[1]


// //             Changing Styles                   //



// const h1 = document.querySelector('h1');

// h1.style.color

// h1.style.color = 'green';

// h1.style.fontSize = '3em';

// h1.style.border = '2px solid pink';




// const allLinks = document.querySelectorAll('a');

// for(let link of allLinks){
//   link.style.color = 'rgb(0,108,134)';
//   link.style.textDecorationColor = 'blue';
//   link.style.textDecorationStyle = 'wavy';
//   link.style.textAlign
// }



// const h1 = document.querySelector('h1');

// h1.style.fontSize

// window.getComputedStyle(h1)

// window.getComputedStyle(h1).fontSize

// window.getComputedStyle(h1).fontSize;

// window.getComputedStyle(h1).color;

// window.getComputedStyle(h1).color = 'red';

// window.getComputedStyle(h1).marginLeft

// window.getComputedStyle(h1).margin

// parseInt(window.getComputedStyle(h1).fontSize);


// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


// const spans = ['r','a','i','n','b','o','w'];

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

// for(let i in colors){
   
//     console.log( spans[i] = colors[i]);
    
// }

// const h2 = document.querySelector('h2');

// h2.classList.toggle('purple');

//Practice session
// const list = document.querySelectorAll('li');

// for(let l of list){
    
//     if(l.classList.contains('highlight') === true){
//         l.classList.remove('highlight');
//     }else{
//         l.classList.add('highlight');
//     }
// }



// const firstBold = document.querySelector('b');
// firstBold
// ​
// firstBold.parentElement
// ​
// firstBold.parentElement.parentElement
// ​
// firstBold.parentElement.parentElement.parentElement

// firstBold.childElement

// const paragraph = firstBold.parentElement

// paragraph.children

// paragraph.children[0]
// ​
// paragraph.children[0].parentElement


// const squareImg = document.querySelector('.square');

// squareImg.parentElement
// ​
// squareImg.childerm

// squareImg.childern

// squareImg.previousElementSibling
// ​
// squareImg.previousSibling

// squareImg.nextElementSibling

// squareImg.nextSibling


// const newImg = document.createElement('img');

// newImg.src ='https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80';

// document.body.appendChild(newImg);

// newImg.classList.add('square');

// const newH3 =document.createElement('h3');

// newH3.innerText = 'I am new';

// document.body.appendChild(newH3);

// console.log('hello');


// hello
// const p = document.querySelector('p');

// p.append('helloccahsadla');

// const newB = document.createElement('b');

// newB.append('hi');

// newB.append('p');

// p.append(newB);

// p.prepend(newB);

// const h2 = document.createElement('h2');

// h2.append("are adorable chickens")


// const h1 = document.querySelector('h1');

// h1.insertAdjacentElement('afterend',h2)   


// const buttons = document.createElement('button');

// buttons.append('HEY!');

// const h1 = document.querySelector('h1');

// document.body.appendChild(buttons);

//   for(let i = 0; i <= 100; i++);
//  {
//     let buttons = document.createElement('button');
//     buttons.append('HEY!');
//     document.body.appendChild(buttons);
//  }

//                  removeChild and remove           //


// const newLi = document.querySelector('li');

// const newUl = newLi.parentElement;

// newUl.removeChild(newLi);


// const newLi = document.querySelector('li');
// newLi.remove();