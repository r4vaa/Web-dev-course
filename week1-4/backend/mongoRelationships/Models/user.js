const mongoose = require('mongoose');


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

const userSchema = new mongoose.Schema({
    first : String,
    last : String,
    addresses : [
        {
            _id: { _id: false},
            street: String,
            city : String,
            state : String,
            country : String
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async() => {
    const u = new User({
        first : 'Harry',
        last : 'Potter'
    })
    u.addresses.push({
        street : '123 Sesame St.',
        city : 'New York',
        state : 'Ny',
        country : 'USA'
    })
    const res = await u.save()
    console.log(res)
}

const addAddress = async(id) => {
    const user = await User.findById(id);
    user.addresses.push({
        street : '1234 Sesame St.',
        city : 'New vasai',
        state : 'Naigoan',
        country : 'India'
    })
    const res = await user.save()
    console.log(res)
}

addAddress('640568214ac06da793aa808d');