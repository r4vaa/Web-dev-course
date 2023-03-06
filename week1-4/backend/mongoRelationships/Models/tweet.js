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


const userSchema = new Schema({
    username : String,
    age : Number
})

const tweetSchema = new Schema({
    text : String,
    likes : Number,
    user: { type : Schema.Types.ObjectId, ref : 'User'}
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//     // const user = new User({ username : 'chickenfan99' , age : 61});
//     const user = await User.findOne({ username : 'chickenfan99'})
//     const tweet2 =  new Tweet({ text: 'bock bock bock bock my chicken make nosies' ,likes: 123})
//     tweet2.user = user;
//     tweet2.save();
// }

// makeTweets();

const findTweet = async() => {
    const t = await Tweet.findById('6405b6b46379c34373106695').populate('user')
    console.log(t)
}

findTweet();