const express =  require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const AppError = require('./AppError');

const Product =  require('./models/product');

mongoose.set('strictQuery', false);
    main().catch(err => console.log(err));
async function main() { await mongoose.connect('mongodb://127.0.0.1:27017/farmStand2')
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
app.use(methodOverride('_method'))

categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res, next) => {
    try{
        const { category } = req.query;
        if( category){
            const products = await Product.find( { category })
            res.render('products/index', { products , category })
        }else {
            const products =  await Product.find({})
            res.render('products/index', { products , category : 'All' })
        }
    }catch(e){
        next(e);
    }
    
    
})

app.get('/', (req, res) => {
    res.send('THIS IS HOMEPAGE');
})

app.get('/products/new' , (req ,res ) => {
    // throw new AppError('NOT ALLOWED' , 401);
    res.render('products/new' , {categories});
})

app.post('/products' ,async(req , res , next)=> {
    try{
        const newProduct =  new Product(req.body);
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`)
    } catch(e){
        next(e);
    }
    
})

app.get('/products/:id' , async( req, res, next ) => { 
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        // console.log(product)
        if(!product){
         throw new AppError('Product Not Found', 404 )
        }
        res.render('products/show' , { product })
    }catch(e){
        next(e);
    }
    
})



app.get('/products/:id/edit', async(req, res, next) => {
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        res.render('products/edit', { product , categories})
    }catch(e){
        next(e);
    }
   
} )

app.put('/products/:id', async(req, res ,next) => {
    try{
        const {id } = req.params;
        const product = await Product.findByIdAndUpdate( id , req.body , { runValidators: true, new:true } )
        res.redirect(`/products/${product._id}`);
    }catch(e){
        next(e);
    }
        
})

app.delete('/products/:id' , async(req, res, next) => {
    try{
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        res.redirect('/products');
    }catch(e){
        next(e);
    }
   
})

app.use((err ,req, res , next )=> {
    const { status = 500 , message = 'Something went Wrong'} = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})