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

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})