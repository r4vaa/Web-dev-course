const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB', { useNewUrlParser : true});


// fruit schema
const fruitSchema = new mongoose.Schema ({
    name : String,
        
    rating : {
        type : Number,
        min : 1,
        max: 10
    },
    review : String
})

// model that uses the fruit Schema

const Fruit = mongoose.model("Fruit", fruitSchema);


// create a new fruit


const jambul = new Fruit ({
    name : 'Jambul',
    rating : 10  ,
    review : "noiceeee"
})

jambul.save()

const personSchema = new mongoose.Schema ({
    name : String,
    age : Number,
    favouriteFruit : fruitSchema
})

//person model
const Person = mongoose.model("Person", personSchema);

Person.updateOne({name: "Dheeraj Patil"},{favouriteFruit : jambul})
.then(function(err) {
    if(err){
        console.log(err);
    }else{
        console.log('Successfully updated');
    }
})


// Fruit.updateOne({_id: "64259d8ea585d3438ed3e865"} ,{ name : "Safed jambun"})
// .then(res => console.log(res, 'Successfully updated the doc'));

// Fruit.deleteOne({_id:"64259d8ea585d3438ed3e865"})
// .then(res => console.log(res, "successfully Delete the FILE"))

// create person schema





// create new person
// const person = new Person ({
//     name : 'Priyanka Patil',
//     age : 27,
//     favouriteFruit : mango
// })


// person.save();

// const kiwi = new Fruit({
//     name : 'Kiwi',
//     score : 10,
//     review : 'The best fruit'
// })

// const orange = new Fruit({
//     name : 'Orange',
//     score : 11,
//     review : 'TTo good for me '
// })
 
// const banana = new Fruit({
//     name : 'Banana',
//     score : 7,
//     review : 'Weird Texture'
// })

// const dalim = new Fruit({
//     name : 'Dalim',
//     score : 7,
//     review : 'nice juicy'
// })

// Fruit.insertMany([kiwi , orange ,banana])
// .then(function(err) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log('Successfully saved all the fruits in the fruitsDB')
//     }
// })

// Fruit.find({}).then(data => {
//     data.forEach(d => {
//         console.log(d.name);
    
//     })
// }
// )

// Fruit.find()
// .then(function(fruits){fruits.forEach(function(fruit){
//     console.log(fruit.name)
// })});