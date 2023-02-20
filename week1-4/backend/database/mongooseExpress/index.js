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

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}))
// app.use(express.json())


app.get('/products', async (req, res) => {
    const products =  await Product.find({})
    res.render('products/index', { products })
})

app.get('/products/new' , (req ,res ) => {
    res.render('products/new');
})

app.post('/products' ,async(req , res)=> {
    const newProduct =  new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id' , async( req, res ) => { 
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log(product)
    res.render('products/show' , { product })
})


app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})