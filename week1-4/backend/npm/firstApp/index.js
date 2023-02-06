const express =  require('express');
const res = require('express/lib/response');

const app = express()

// USED TO GET ANY REQ AND MATCHES EVERYTHING THAT WE GET
// app.use( (req, res) => {
//     console.log("WE GOT A REQUEST");
//     // res.send("hello, we got your reques! this is our response")
//     // res.send({color: 'red'})
//     res.send('<h1>this is my webpage</h1>')
// })

//  GETS THE REQUEST FOR HOMEPAGE OF /  AND GIVES A RESPONSE OF HOMEPAGE
app.get('/',(req, res) => {
    res.send('<h1>Welcome this is a home page</h1>');
})

//GETS THE REQUEST FOR ANY REQUEST AFTER R/: AND GIVES A REPSONSE


// app.get('/r/:subreddit', (req, res) => {
//     console.dir(req.params)
//     res.send(`<h1>This is subreddit for ${subreddit}</h1>`);
// })


app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} of subreddit</h1>`);
})


//GETS THE REQUEST FOR ANY REQUEST AFTER R/:SUB/:POSTID AND GIVES A REPSONSE

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit , postId } = req.params;
    res.send(`<h1>Viewing the PostId: ${postId} on the ${subreddit} of subreddit</h1>`);
})



//POST THE REQUEST THAT WE GET FROM CLIENT
app.post('/cats', (req,res) => {
    res.send('this is a post request for cats')
})


// GET THE REQUEST FROM CLIENT ABOUTS /CATS AND SEND A RESPONSE OF MEOW!
app.get('/cats', (req, res) => {
    res.send('MEOW!!');
})


// GET THE REQUEST FROM CLIENT ABOUTS /DOGS AND SEND A RESPONSE OF WOOFF!
app.get('/dogs', (req , res) => {
    res.send('WOOOFFF');
})


// WHEN USER TRY TO SEARCH ANYTHING IN AN INPUT FORM WE USE QUERY STRING TO GET THE INPUT


app.get('/search', (req, res) => {
    const { q } = req.query;
    if(!q){
        res.send('NOTHING FOUND IF NOTHING SEARCHED');
    }else{
        res.send(`<h1>Search results for: ${q}</h1>`)
    }
    
 })



// TAKE ANY REQUEST FROM THE CLIENT AND GIVES A SPECIFIC RESPONE
app.get('*', (req, res) => {
    res.send('WE DONT HAVE THIS TYPE OF URL, PLEASE CHECK')
})



app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})
