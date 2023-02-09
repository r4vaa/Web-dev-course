const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended : true}))
app.use(express.json())

// to initialize view in our express app

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')


// Rought data base currently for example

const comments = [
    {
        username : 'Todd',
        comment : 'lol this is so funny!'
    },
    {
        username : 'Skyler',
        comment : 'it will be 879,000 dollars'
    }, 
    {
        username : 'Walter',
        comment : 'Say my NAme!, hesinberg'
    }, 
    {
        username : 'Jessi',
        comment : 'hehehehehe bitch'
    }
]

// app.get('/', (req, res) => {
//     res.render('comments')
// })

// CRUD reading database

app.get('/comments',(req ,res) => {
    res.render('comments/index', { comments});
})


// shows the form where we need to collect the data from

app.get('/comments/new', (req ,res) => {
    res.render('comments/new');
})

// creates a new comment and username in our database 


app.post('/comments',(req , res) => {
    const {username , comment } = req.body;  // gets the data from the post req sent by client
    comments.push({username , comment})   // pushes the newly created data to database
    res.send('it worked');   // displays the user that your comment is sucessfully submitted.
})


app.get('/tacos', (req, res) => {
    res.send('GET /tacos response')
})



app.post('/tacos' , (req, res) => {
    const { meat , qty } = req.body
    
    res.send(`this is your order of ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("ON PORT 300")
})





// GET /comments - list all comments
// POST /comments - Create a new comments
// GET /comments/:id - Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELTE /comments/:id - Destroy one comment 

