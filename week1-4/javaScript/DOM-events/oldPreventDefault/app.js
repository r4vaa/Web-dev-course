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
  const pTag = document.createElement('p');

  bTag.innerText = username;
  newTweet.append(bTag);
  pTag.innerText = tweet;
  newTweet.append(pTag);
  tweets.append(newTweet);

}