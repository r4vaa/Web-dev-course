const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require('https');


app.use(bodyParser.urlencoded( { extended : true}));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
})

app.post('/' , (req ,res ) => {
    const firstName = req.body.fName;
    const lasttName = req.body.lName;
    const email = req.body.email;

    const data ={
        members : [
            {
                email_address : email,
                status : 'subscribed',
                merge_fields: {
                    FNAME : firstName,
                    LNAME : lasttName
                }
            }
        ]
       
      }

      const jsonData = JSON.stringify(data);
      const url = "https://us19.api.mailchimp.com/3.0/lists/48c8b30b74";
      const options = {
        method : 'POST',
        auth : 'dheeraj:5af399f6f2436ba484cc9b0f026b0850-us19'
      }
      
      const request = https.request(url, options, function (response) { 
            if(response.statusCode === 200){
                 res.sendFile(__dirname + '/succes.html')
            }else{
                res.sendFile(__dirname + '/failure.html')
            }
            response.on('data' , function(data){
                console.log(JSON.parse(data));
            })
      })

    //   request.write(jsonData);
      request.end()
    
    // res.sendFile(__dirname('/succes.html'))
})


app.post('/failure', function(req ,res) {
    res.redirect('/')
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})

//API Key
//5af399f6f2436ba484cc9b0f026b0850-us19


//list id
//48c8b30b74



 // "name": "$event_name",
        // "contact": $footer_contact_info,
        // "permission_reminder": "permission_reminder",
        // "email_type_option": true,
        // "campaign_defaults": $campaign_defaults