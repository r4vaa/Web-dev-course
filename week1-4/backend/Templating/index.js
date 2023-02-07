const express = require('express');
const app = express();
const path = require('path');

// this tells express app to use ejs.
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/views'))

// res.render sends the view
app.get('/',(req, res) => {
    res.render('home')
})


// we can pass an object with the render, that renders the objects key value
app.get('/rand', (req, res) => {
    const num =  Math.floor(Math.random() *10) +1;
    res.render('random', { rand : num });
})


app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})