const express = require('express');
const app = express();
const path = require('path');
const { v4 : uuid } = require('uuid');
const methodOverride = require('method-override');


app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(methodOverride('_method'));


// to initialize view in our express app

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')


// Rought data base currently for example

let comments = [
    {   
        id : uuid(),
        username : 'Todd',
        comment : 'lol this is so funny!'
    },
    {
        id : uuid(),
        username : 'Skyler',
        comment : 'it will be 879,000 dollars'
    }, 
    {
        id :uuid(),
        username : 'Walter',
        comment : 'Say my NAme!, hesinberg'
    }, 
    {
        id : uuid(),
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
    comments.push({username , comment , id : uuid() })   // pushes the newly created data to database
    // res.send('it worked');   // displays the user that your comment is sucessfully submitted.
    res.redirect('/comments');  // this will redirect to the comments page
})


app.get('/comments/:id' , (req , res) => {
    const{ id } = req.params;
    const comment = comments.find( c => c.id === id);
    res.render('comments/show', { comment })

})

app.get('/comments/:id/edit', (req , res) => {
    const { id } = req.params;
    const comment = comments.find( c => c.id === id);
    res.render('comments/edit', { comment })
})

app.patch('/comments/:id' , (req , res) => {
    const { id } = req.params;    // find the id
    const foundComment = comments.find( c =>  c.id === id ); // find the id 
    const newCommentText = req.body.comment  // gets the new comment from the user
    foundComment.comment = newCommentText;  // finding the old comment and updating it with the new
    res.redirect('/comments')    // redirecting to comments/index
})


app.delete('/comments/:id', (req, res) => {
    const { id } = req.params
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
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

