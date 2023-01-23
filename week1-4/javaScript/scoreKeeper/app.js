const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1ScoreDisplay = document.querySelector('#p1ScoreDisplay');
const p2ScoreDisplay = document.querySelector('#p2ScoreDisplay');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;

let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click',function(){
  if(!isGameOver){
      p1Score += 1;
    if(p1Score === winningScore){
      isGameOver = true;
      p1ScoreDisplay.classList.add('winner');
      p2ScoreDisplay.classList.add('loser');
    }    
    p1ScoreDisplay.textContent= p1Score;
  }
  
})


p2Button.addEventListener('click',function(){
    if(!isGameOver){
      p2Score += 1;
    if(p2Score === winningScore){
      isGameOver = true;
      p2ScoreDisplay.classList.add('winner');
      p1ScoreDisplay.classList.add('loser');
      
    }    
    p2ScoreDisplay.textContent= p2Score;
  }
})

winningScoreSelect.addEventListener('change',function(){
   winningScore = parseInt(this.value) ;
   reset();
})

resetButton.addEventListener('click',reset)

function reset(){
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1ScoreDisplay.textContent = 0;
  p2ScoreDisplay.textContent = 0;
  p2ScoreDisplay.classList.remove('winner','loser');
  p1ScoreDisplay.classList.remove('winner','loser');
}