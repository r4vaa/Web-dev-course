const express = require('express')
const bodyParser = require('body-parser');
const port = 3000;


const app = express();
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post('/', (req, res) => {
    const num1 = Number(req.body.n1);
    const num2 = Number(req.body.n2);
    const result = num1 + num2;
    res.send('The result of the calculation is ' + result);
})

app.get('/bmi', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
})

app.post('/bmicalculator', (req , res) => {
    const weight =  parseFloat(req.body.weight);
    const height =  parseFloat(req.body.height);
    const BMI = weight / (height * height);
    res.send('Your BMI is: ' + BMI);
})


app.listen(port, () => {
    console.log(`Listening to Port ${port}`)
})