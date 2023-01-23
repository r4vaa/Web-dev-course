// const tweetForm = document.querySelector('#tweetForm');
// const tweets = document.querySelector('#tweets');

// tweetForm.addEventListener('submit',function(e){
//   e.preventDefault();
//   const userNameInput = tweetForm.elements.username;
//   const tweetInput = tweetForm.elements.tweet ;
//   addTweet(userNameInput.value , tweetInput.value);
//   userNameInput.value = '';
//   tweetInput.value= '';  
//   })

// const addTweet = (username, tweet) =>{

//   const newTweet = document.createElement('li');
//   const bTag = document.createElement('b');
//   const pTag = document.createElement('p');

//   bTag.innerText = username;
//   newTweet.append(bTag);
//   pTag.innerText = tweet;
//   newTweet.append(pTag);
//   tweets.append(newTweet);

// }

// practice

// const form = document.querySelector('#form');
// const ulList = document.querySelector('#list');

// form.addEventListener('submit',function(e){
//   e.preventDefault();
//   const productNameInput = form.elements.product;
//   const quantityInput = form.elements.qty;
//   const newLi = document.createElement('li');
//   ulList.appendChild(newLi);
//   newLi.innerText=`${productNameInput.value} ${quantityInput.value}`;
//   productNameInput.value = '';
//   quantityInput.value = '';

 
// })


// Change and inpunt events

// const input = document.querySelector('input');

// input.addEventListener('change',function(e){
//   console.log('input trigged');
// })

// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// input.addEventListener('input',function(e){

//   h1.innerText = input.value;
  
// })

const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input',function(e){
      e.preventDefault();
      const inputValue = input.value;
     
     if(inputValue === ''){
       h1.innerText = 'Enter Your Username'
     }else{
      h1.innerText = `Welcome, ${inputValue}`;
     }

})