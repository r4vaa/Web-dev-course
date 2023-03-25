const express = require('express');
const app = express();
const port = 3000;
const https = require('https');




app.get('/' , (req ,res ) => {
    
    const weatherAPI ='https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=45252cdf5cbd8034c7858319cdf49006&units=metric';

    https.get(weatherAPI, (response) => {
        console.log(response.statusCode)

        response.on('data', (data) => {
           const weatherData =  JSON.parse(data);
           const temp = weatherData.main.temp
           const des = weatherData.weather[0].description
           
        //    const object = {
        //     name : "dheeraj",
        //     favouriteFood : 'Ramen'
        //    }
        //    console.log(JSON.stringify(object));
           console.log(temp ,des)
        })
    })
    res.send('HELLO');
})


app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
})