// INTRODUCTION TO DOM(Document Object Model)
//CONCEPTS
// getElementById
//querySelector
//innerHTML and text
// changing styles
// Manipulating Attributes
// classList
//Traversing the DOM
// Creating/removing elements


//getElementById
// const toc = document.getElementById('toc');


//getELementsByTagName

const allImages = document.getElementsByTagName('img');

// for(let img of allImages){
//     img.src = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80';
// }


const squareImages = document.getElementsByClassName('square');

// for(let img of squareImages){
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

//  querySelector
// a newer, all-in-one method to select a single element

document.querySelector('img:nth-of-type(2)');  //returns 2nd img
console.log(document.querySelector('a[title="Java"]')); // return anchor tag where title is java
document.querySelector('.class');    // returns class
document.querySelector('#id');      //  returns id
document.querySelector('h1');      //  returns element


//   querySelectorAll
// same idea, but returns a collection of matching elements

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href);
}













// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }


// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }