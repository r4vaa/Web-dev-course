const express = require('express');
const { ConnectionStates } = require('mongoose');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');

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

const verifyPassword = (req,res, next)=> {
    const { password } = req.query;
    if(password === 'chickennuggets'){
        next();
    }
    // res.send('SOORY YOU REQUIRE PASSWORD');
    // res.status(401);
    // throw new Error('Passowrd required')
    throw new AppError('Password Required please add it', 401);
}

app.get('/', (req , res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('home PAGE!!')
})

app.get('/error', (req, res) => {
    chicken.fly();
})

app.get('/dogs',(req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('WOFF WOOF')
})

app.get('/secret', verifyPassword ,(req, res ) => {
    res.send('MY SECRET IS: i am afraid of everyone because i dont know what to do');
})
app.get('/admin' , (req, res) => {
    throw new AppError('You are not a admin ',403)
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND');
})

// app.use((err, req, res, next)=> {
//     console.log("************************************");
//     console.log("****************ERROR***************"); 
//     console.log("************************************");
//     console.log(err);
//     next(err);
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message);
}) 



app.listen(3000, () => {
    console.log('LISTENING TO PORT 3000')
})