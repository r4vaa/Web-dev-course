const express = require('express');
const app = express();
const port = 3000;
const https = require('https');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/' , (req ,res ) => {
   res.sendFile(__dirname + '/index.html')
})

app.post('/', (req ,res ) => {
        
        const query = req.body.cityName;
        const key =  '45252cdf5cbd8034c7858319cdf49006';
        const unit = 'metric'
        const weatherAPI ='https://api.openweathermap.org/data/2.5/weather?q=' + query +'&appid=' + key + '&units=' + unit

        https.get(weatherAPI, (response) => {
            console.log(response.statusCode)

            response.on('data', (data) => {
            const weatherData =  JSON.parse(data);
            const temp = weatherData.main.temp
            const des = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL ='http://openweathermap.org/img/wn/' + icon +'@2x.png'
            // my way
            //    const Temperature = 'The temperature in mumbai is ';
            //    const degree = 'degree Celcius';
            //    const weatherDesc = 'The weather is currently'
            //    res.send(`<h1>${Temperature} ${temp} ${degree}, ${weatherDesc} ${des}</h1>`)

            res.write('<p>The weather is currently ' + des + "</p>");
            res.write('<h1>The temperature in mumbai is' + temp + 'degree Celcius.</h1>')
            res.write('<img src=' + imageURL +  '>');
            res.send()
            //    const object = {
            //     name : "dheeraj",
            //     favouriteFood : 'Ramen'
            //    }
            //    console.log(JSON.stringify(object));
            //    console.log(temp ,des)
            })
        })
})



app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
})