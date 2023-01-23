const tweetForm = document.querySelector('#tweetForm');
const tweets = document.querySelector('#tweets');

tweetForm.addEventListener('submit',function(e){
  e.preventDefault();
  const userNameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet ;
  addTweet(userNameInput.value , tweetInput.value);
  userNameInput.value = '';
  tweetInput.value= '';  
  })

const addTweet = (username, tweet) =>{

  const newTweet = document.createElement('li');
  const bTag = document.createElement('b');

  bTag.innerText = username;
  newTweet.append(bTag);
  newTweet.append(` --${tweet}`);
  tweets.append(newTweet);

}

tweets.addEventListener('click',function(e){
 e.target.nodeName === 'LI' &&  e.target.remove();
})

// practice

const form = document.querySelector('#form');
const ulList = document.querySelector('#list');

form.addEventListener('submit',function(e){
  e.preventDefault();
  const productNameInput = form.elements.product;
  const quantityInput = form.elements.qty;
  const newLi = document.createElement('li');
  ulList.appendChild(newLi);
  newLi.innerText=`${productNameInput.value} ${quantityInput.value}`;
  productNameInput.value = '';
  quantityInput.value = '';

 
})


// Change and inpunt events

const input = document.querySelector('input');

input.addEventListener('change',function(e){
  console.log('input trigged');
})

const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input',function(e){

  h1.innerText = input.value;
  
})

const input = document.querySelector('input');
const h1 = document.querySelector('h1');
const defaultH1 = 'Enter Your Username';
input.addEventListener('input',function(e){
      e.preventDefault();
      const inputValue = input.value;
     
     if(inputValue === ''){
       h1.innerText = defaultH1;
     }else{
      h1.innerText = `Welcome, ${inputValue}`;
     }

})

// Event Bubbling

const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

const makeRandColor = ()=>{
  const r = Math.floor(Math.random()*255)+1;
  const g = Math.floor(Math.random()*255)+1;
  const b = Math.floor(Math.random()*255)+1;
  return `rgb(${r},${g},${b})`;
}

button.addEventListener('click',function(e){
  container.style.backgroundColor = makeRandColor();
  e.stopPropagation();
})

container.addEventListener('click',function(){
  container.classList.add('hide');
  
})