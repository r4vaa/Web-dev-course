const express = require('express');
const { ConnectionStates } = require('mongoose');
const app = express();
const morgan = require('morgan');

// app.use(morgan('dev'));

// app.use((req, res, next) => {
//     console.log('THIS IS MY FIRST MIDDLE Ware')
//     next();
//     console.log('this is my middle ware after 1st and 2nd')
// })

// app.use((req, res, next) => {
//     console.log('THIS IS MY SECOND MIDDLE Ware')
//     next();
// })

app.use(morgan('tiny'));
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method , req.path);
    next();
})

app.use('/dogs',(req, res, next) => {
    console.log('I LOVE DOGS');
    next();
})

app.get('/', (req , res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('home PAGE!!')
})

app.get('/dogs',(req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('WOFF WOOF')
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND');
})

app.listen(3000, () => {
    console.log('LISTENING TO PORT 3000')
})