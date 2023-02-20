const express =  require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product =  require('./models/product');

mongoose.set('strictQuery', false);
    main().catch(err => console.log(err));
async function main() { await mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
            .then(() => {
            console.log('Mongoose Connection OPen')
            })
            .catch(err => {
            console.log('OH no !! Mongoose  ErroR!!!');
            console.log(err)
            })
            }

app.set('view', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.get('/dog',(req, res) => {
    res.send('WOOFF');
})
app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})