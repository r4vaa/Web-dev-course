const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log('Connection OPen')
    })
    .catch(err => {
        console.log('OH no ErroR!!!');
        console.log(err)
    })
}

const movieSchema =  new mongoose.Schema({
    title : String ,
    year : Number ,
    score : Number,
    rating : String
})

const Movie = mongoose.model('Movie', movieSchema)
// const amadeus = new Movie({title : 'amadeus', year:1986 , score:9.2,rating:'R'})

// Movie.insertMany([
//     {title : 'Amelie', year:1986 , score:9.2,rating:'R'},
//     {title : 'Dragon Ball Z', year: 1999 , score:10,rating:'R'},
//     {title : 'Bleach', year: 1994 , score:8 ,rating:'PG'},
//     {title : 'One Piece', year: 1995 , score:9.9 ,rating:'R'},
//     {title : 'Fairy Tail', year:2010 , score:7.9,rating:'PG-13'}
// ])
// .then(data => {
//     console.log('it WOrked!');
//     console.log(data);
// })