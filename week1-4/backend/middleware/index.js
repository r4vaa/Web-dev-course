const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/', (req , res) => {
    res.send('home PAGE!!')
})

app.get('/dogs',(req, res) => {
    res.send('WOFF WOOF')
})


app.listen(3000, () => {
    console.log('LISTENING TO PORT 3000')
})