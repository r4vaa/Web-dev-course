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

// const req = new XMLHttpRequest();

// req.onload = function(){
//         console.log('its loaded');
//         const data = JSON.parse(this.responseText);
//         console.log(data.name , data.birth_year)
// }

// req.onerror = function() {
//         console.log('error');
//         console.log(this);
// }

// req.open("GET","https://swapi.dev/api/people/1");
// req.send(); 

//  Fetch with promises

// fetch("https://swapi.dev/api/people/1")
// .then((res) => {
//         console.log('RESOLVEDssss', res)
//         res.json().then(data => console.log(data.name))
// })

// .catch((e) => {
//         console.log("ERROR!",e)
// })


// fetch("https://swapi.dev/api/people/1")
// .then((res) => {
//         console.log('RESOLVED', res)
//         return res.json()
// })
// .then((data) => {
//         console.log(data.name);
//        return fetch("https://swapi.dev/api/people/2")
// } )
// .then((res) => {
//         console.log("RESSS",res)
//         return res.json();
// })
// .then((data) => {
//         console.log(data)
//         console.log(data.name);
// })
// .catch((e) => {
//         console.log("ERROR!",e)
// })


// fetching data using asyc

// const loadStarWarPeople = async () => {
//         try{
//                 const res =  await fetch("https://swapi.dev/api/people/1");
//                 const data = await res.json();
//                 console.log(data.name)
         
//                 const res1 = await fetch("https://swapi.dev/api/people/2");
//                 const data1 = await res1.json();
//                 console.log(data1.name)
//         }
//        catch(e){
//         console.log("ERROR", e)
//        }
// }

// loadStarWarPeople();