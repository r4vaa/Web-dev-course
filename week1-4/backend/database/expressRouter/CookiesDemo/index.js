const cookieParser = require('cookie-parser');
const express =  require('express');
const app = express();

app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
    const { name = 'No-name'}  = req.cookies
    res.send(`Hey there ${name}`);
})

app.get('/setname' , (req, res ) => {
    res.cookie('name','kallu komdi');
    res.cookie('animal','harlequin shrimp');
    res.send('Sending a cookie');
})

app.get('/getsignedcookie' , (req, res ) => {
    res.cookie('fruit', 'grape', { signed : true })
    res.send('OK Signed your fruit cookie')
})

app.get('/verifyfruit' , (req, res ) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies);
})

app.listen(3000 , () => {
    console.log('SERVING')
})