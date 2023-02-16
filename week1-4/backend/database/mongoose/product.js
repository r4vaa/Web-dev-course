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
        required : true,
        maxlength : 20
    },
    price : {
        type :Number,
        required : true,
        min : [0 ,'Price must be positive DOdo!']
    },
    onSale : {
        type :  Boolean,
        default : false
    },
    categories : [String],
    qty: {
        online : {
            type : Number,
            default : 0
        },
        inStore : {
            type : Number,
            default : 0
        }
    },
    size : {
        type : String ,
        enum : ['S','M', 'L']
    }
})

const Product = mongoose.model('Product', productSchema);

            // creating a new product //
// // const bike = new Product( {name: 'Tire Pump', price : 20, categories : ['Cycling'], qty:{online: 10, inStore : 12}} );
// bike.save()

 
            // updating a product  //
// Product.findOneAndUpdate({name : 'Tire Pump'}, { price : -9 }, {new : true, runValidators : true})

const bike = new Product({name:'Cycling Jersey', price: 28.50, categories: ['Cycling'],size:'S' })
bike.save()
.then(data => {
    console.log("it Workeddd");
    console.log(data);
}).catch(err => {
    console.log("ERROR");
    console.log(err)
})