//         INTRO TO AXIOS

// axios.get("https://swapi.dev/api/people/1/")
// .then((res) => {
//     console.log("RESPONSE:", res);
// })
// .catch((e) => {
//     console.log('Error: ',e)
// })


// const getStarWarPerson = async(id) => {
//     try{
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data.name, res.data.birth_year);
//     }catch(e){
//         console.log("ERROR",e)
//     }
//     } 
    

// getStarWarPerson(10);
// getStarWarPerson(1);


const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');



const addNewJoke = async() =>{
        const joke = await getDadJoke();
        const newLI = document.createElement('li');
        newLI.append(joke)
        jokes.append(newLI)  
}

const getDadJoke = async() => {
    try{
    const config = { headers: { Accept: 'application/json' }}
    const res = await axios.get('https://icanhazdadjoke.com/',config);
    return res.data.joke
    }catch(e){
    return `NO JOKES AVAILABLE SORRY :(`
    }
}

button.addEventListener('click', addNewJoke)