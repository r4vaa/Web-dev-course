const express =  require('express');

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
    res.send('this is a home page');
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

// TAKE ANY REQUEST FROM THE CLIENT AND GIVES A SPECIFIC RESPONE
app.get('*', (req, res) => {
    res.send('WE DONT HAVE THIS TYPE OF URL, PLEASE CHECK')
})


app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})
