const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


mongoose.set('strictQuery', false);
    main().catch(err => console.log(err));
    async function main() { await mongoose.connect('mongodb://127.0.0.1:27017/authDemo')
        .then(() => {
        console.log('Database Connected')
    })
    .catch(err => {
        console.log('OH no !! Mongoose ErroR!!!');
        console.log(err)
    })
}

app.set('view engine', 'ejs');
app.set('views','views');

app.use(express.urlencoded({ extended : true }))

app.get('/', (req, res) => {
    res.send('THIS IS HOME PAGE');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async(req, res) => {
    const { password , username} = req.body;
    const hash = await bcrypt.hash(password , 12);
    const user = new User( {
        username,
        password : hash
    })
    await user.save();
    res.redirect('/')
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async(req, res) => {
    const { username , password} = req.body;
    const user = await User.findOne({ username });
    const validPassword = await bcrypt.compare(password , user.password);
    if(validPassword){
        res.send("YAAY WELCOME!!!")
    }else{
        res.send('Incorrect Password');
    }
})

app.get('/secret' , (req , res ) => [
    res.send('THIS IS SECRET! YOU CANNOT SEE ME UNLESS YOU ARE ADMIN')
])


app.listen(3000, () => {
    console.log('SERVING YOUR APP!');
})