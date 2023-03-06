
const mongoose = require('mongoose');

const Product =  require('./models/product');

mongoose.set('strictQuery', false);
main().catch(err => console.log(err));
async function main() { await mongoose.connect('mongodb://127.0.0.1:27017/farmStandTake2')
    .then(() => {
        console.log('Mongoose Connection OPen')
    })
    .catch(err => {
        console.log('OH no !! Mongoose  ErroR!!!');
        console.log(err)
    })
 }

// const p = new Product ({
//     name : 'Ruby GrapeFruit',
//     price : 1.99,
//     category : 'fruit'
// })
// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e);
//     })
// const seedProducts = [
   
//     {
//         name : 'Fairy Eggplant',
//         price : 1.00,
//         category : 'vegetable'
//     },
//     {
//         name : 'Organic Goddess Melon',
//         price : 4.99,
//         category : 'fruit'
//     },
//     {
//         name : 'Organic Mini Seedless Watermelon',
//         price : 3.99,
//         category : 'fruit'
//     },
//     {
//         name : 'Organic Calery',
//         price : 1.59,
//         category : 'vegetable'
//     },
//     {
//         name : 'Chocolate Whole Milk',
//         price : 2.69,
//         category : 'dairy'
//     },
     
// ]

// Product.insertMany(seedProducts)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(e =>{
//         console.log(e)
//     })







// this is just for development purpose so that we create new products and check if it is working or not
