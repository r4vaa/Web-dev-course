const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');



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
app.use(session({secret: 'notagoodsecret', saveUninitialized : true, resave : false}))

const requireLogin = ((req, res , next) => {
    if(!req.session.user_id){
       return res.redirect('/login')
    }
    next();
})


app.get('/', (req, res) => {
    res.send('THIS IS HOME PAGE');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async(req, res) => {
    const { password , username} = req.body;
    // const hash = await bcrypt.hash(password , 12);
    const user = new User( { username,password })
    await user.save();
    req.session.user_id = user._id
    res.redirect('/')
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async(req, res) => {
    const { username , password} = req.body;
    const foundUser = await User.findAndValidate(username, password)
    // const user = await User.findOne({ username });
    // const validPassword = await bcrypt.compare(password , user.password);
    if(foundUser){
        req.session.user_id = foundUser._id
        res.redirect('/secret')
    }else{
        res.redirect('/login');
    }
})

app.post('/logout' , (req, res) => {
    req.session.user_id = null;
    // req.session.destroy();
    res.redirect('/login');
})

app.get('/secret' ,requireLogin,(req , res ) => {
    // if(!req.session.user_id){
    //    return res.redirect('/login')
    // }
    res.render('secret');     
})

app.get('/topSecret', requireLogin,( req , res ) => {
    res.redirect('secret');
})


app.listen(3000, () => {
    console.log('SERVING YOUR APP!');
})