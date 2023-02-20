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

const personSchema =  new mongoose.Schema(
    {
        first : String,
        last : String
    }
)

personSchema.virtual('fullName').get(function( ) {
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function() {
    this.first = 'YO';
    this.last = 'MAMA'
    console.log("ABOUT TO SAVE !!!")

})

personSchema.post('save' , async function() {
    console.log("JUST SAVED");
})

const Person = mongoose.model ( 'Person' , personSchema);