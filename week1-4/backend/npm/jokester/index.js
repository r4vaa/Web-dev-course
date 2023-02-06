const jokes = require('give-me-a-joke');
const colors = require('colors');
const cowsay = require('cowsay');


jokes.getRandomDadJoke(function (joke){
    return console.log(joke.colors)
})


