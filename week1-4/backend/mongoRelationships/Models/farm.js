const mongoose = require('mongoose');
const { Schema } = mongoose;


mongoose.set('strictQuery', false);
  main().catch(err => console.log(err));
    async function main() {
     await mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
     .then(() => {
     console.log('Connection OPen')
    })
    .catch(err => {
    console.log('OH no Mongo Connection ErroR!!!');
    console.log(err)
  })
}


const productSchema = new Schema({
    name : String,
    price : Number,
    season: {
        type : String,
        enum : [ 'Spring', 'Summer', 'Fall', 'Winter']
    }
});

const farmSchema = new Schema({
    name : String,
    city : String,
    products : [ { type: Schema.Types.ObjectId , ref: 'Product' }]
})


const Product = mongoose.model('Product' ,productSchema);
const Farm =  mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     { name : ' Goddess Melon',  price : 4.99 , season : 'Summer'},
//     { name : ' Sugar Baby Watermelon',  price : 2.99 , season : 'Summer'},
//     { name : ' Asparagus ',  price : 3.99 , season : 'Spring'}
// ])





// const makeFarm =  async() => {
//     const farm = new Farm({ name : 'full belly farms' , city: 'Gunida, CA'});
//     const melon = await Product.findOne({ name: ' Goddess Melon'});
//     farm.products.push(melon)
//     await farm.save()
//     console.log(farm);
// }

// makeFarm();

const addProduct =  async () => {
    const farm = await Farm.findOne({ name : 'full belly farms'});
    const watermelon = await Product.findOne({name : ' Sugar Baby Watermelon'})
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
}

// addProduct();

Farm.findOne({name: 'full belly farms'})
.populate('products')
.then( farm => console.log(farm)) 