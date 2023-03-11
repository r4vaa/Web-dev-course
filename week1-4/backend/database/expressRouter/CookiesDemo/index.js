const cookieParser = require('cookie-parser');
const express =  require('express');
const app = express();

app.use(cookieParser());

app.get('/greet', (req, res) => {
    const { name = 'No-name'}  = req.cookies
    res.send(`Hey there ${name}`);
})

app.get('/setname' , (req, res ) => {
    res.cookie('name','kallu komdi');
    res.cookie('animal','harlequin shrimp');
    res.send('Sending a cookie');
})


app.listen(3000 , () => {
    console.log('SERVING')
})