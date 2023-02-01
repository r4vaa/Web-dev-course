//  AJAX
// API
// JSON

// const data = `{"ticker":{"base":"BTC","target":"USD","price":"22890.39367817","volume":"9179.35433248","change":"-16.71475396"},"timestamp":1675138804,"success":true,"error":""}`;

// const parsedData = JSON.parse(data);
// console.log(parsedData.ticker.price);

// const dog = {
//         breed : 'lab',
//         color : 'black',
//         isAlive : true,
//         owner: undefined
// }

// HTTP verbs
// Making XHRs via javascript

const req = new XMLHttpRequest();

req.onload = function(){
        console.log('its loaded');
        const data = JSON.parse(this.responseText);
        console.log(data.name , data.birth_year)
}

req.onerror = function() {
        console.log('error');
        console.log(this);
}

req.open("GET","https://swapi.dev/api/people/1");
req.send();