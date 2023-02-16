const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('Connection OPen')
    })
    .catch(err => {
        console.log('OH no ErroR!!!');
        console.log(err)
    })
}

const productSchema = new mongoose.Schema( {
    name : {
        type : String,
        required : true 
    },
    price : {
        type :Number,
        required : true
    },
    onSale : {
        type :  Boolean,
        default : false
    }
})

const Product = mongoose.model('Product', productSchema);


// const bike = new Product( {name: 'Mountain Bike', price : 999, color: 'red'} );
// bike.save()
// .then(data => {
//     console.log("it Workeddd");
//     console.log(data);
// }).catch(err => {
//     console.log("ERROR");
//     console.log(err)
// })