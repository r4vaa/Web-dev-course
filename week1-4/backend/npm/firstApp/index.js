const express =  require('express');
const app = express()

app.use( (req, res) => {
    console.log("WE GOT A REQUEST");
    // res.send("hello, we got your reques! this is our response")
    // res.send({color: 'red'})
    res.send('<h1>this is my webpage</h1>')
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})
