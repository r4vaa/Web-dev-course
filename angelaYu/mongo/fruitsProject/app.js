const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB', { useNewUrlParser : true});


// fruit schema
const fruitSchema = new mongoose.Schema ({
    name : String,
    rating :Number,
    review : String
})

// model that uses the fruit Schema

const Fruit = mongoose.model("Fruit", fruitSchema);


// create a new fruit


const fruit = new Fruit ({
    name : 'Apple',
    rating : 7,
    review : "pretty good/"
})

//fruit.save()

// create person schema
const personSchema = new mongoose.Schema ({
    name : String,
    age : Number
})

//person model
const Person = mongoose.model("Person", personSchema);


// create new person
const person = new Person ({
    name : 'Dheeraj Patil',
    age : 27
})

// person.save();

const kiwi = new Fruit({
    name : 'Kiwi',
    score : 10,
    review : 'The best fruit'
})

const orange = new Fruit({
    name : 'Orange',
    score : 11,
    review : 'TTo good for me '
})
 
const banana = new Fruit({
    name : 'Banana',
    score : 7,
    review : 'Weird Texture'
})

const dalim = new Fruit({
    name : 'Dalim',
    score : 7,
    review : 'nice juicy'
})

Fruit.insertMany([kiwi , orange ,banana])
.then(function(err) {
    if(err){
        console.log(err);
    } else {
        console.log('Successfully saved all the fruits in the fruitsDB')
    }
})
