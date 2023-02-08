const express = require('express');
const app = express();
const path = require('path');
const reddiData = require('./data.json');

app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'js')))



// this tells express app to use ejs.
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/views'))

// res.render sends the view
app.get('/',(req, res) => {
    res.render('home')
})

app.get('/cats', (req ,res) => {
    const cats = [
        'dheeraj','priyanka','juhile','manish','kalu'
    ]
    res.render('cats',{cats});
})

app.get('/r/:subreddit', (req ,res) => {
    const { subreddit } = req.params
    const data = reddiData[subreddit];
    if(reddiData[subreddit]){
        res.render('subreddit', {...data})
    }else{
        res.render('notfound',{ subreddit })
    }
    
})


// we can pass an object with the render, that renders the objects key value
app.get('/rand', (req, res) => {
    const num =  Math.floor(Math.random() *10) +1;
    res.render('random', { rand : num });
})


app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})