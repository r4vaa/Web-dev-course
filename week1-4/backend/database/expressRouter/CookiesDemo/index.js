const express =  require('express');
const app = express();


app.get('/greet', (req, res) => {
    res.send('HELLO')
})

app.get('/setname' , (req, res ) => {
    res.cookie('name','kallu komdi');
    res.cookie('animal','harlequin shrimp');
    res.send('Sending a cookie');
})


app.listen(3000 , () => {
    console.log('SERVING')
})