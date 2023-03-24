const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res ) => {
    res.send('<h1>Hello world</h1>');
})

app.get('/contact', (req ,res ) => { 
        res.send('contact me at: dheerajpatil@gmail.com ')
})

app.get('/about',(req ,res) => {
    res.send('<h1>Hi , i am Dheeraj a web developer</h1> <p>this is just a description of my webpage</p>')
})

app.get('/hobbies' , (req, res) => {
    res.send('<h1>Hobbies</h1><ul><li>Coffee</li><li>Beer</li></ul>')
})

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
})