//         INTRO TO AXIOS

// axios.get("https://swapi.dev/api/people/1/")
// .then((res) => {
//     console.log("RESPONSE:", res);
// })
// .catch((e) => {
//     console.log('Error: ',e)
// })


const getStarWarPerson = async(id) => {
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    }catch(e){
        console.log("ERROR",e)
    }
    } 
    

getStarWarPerson(10);
getStarWarPerson(1);