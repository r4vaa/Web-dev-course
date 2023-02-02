// TV show search



const form = document.querySelector('#searchForm');
const button = document.querySelector('button');

form.addEventListener('submit',async function(e){
    e.preventDefault();
    const serachTerm = form.elements.query.value;
    const config = {params : { q : serachTerm} }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config);
    makeImages(res.data);
    form.elements.query.value = '';
    
})



const makeImages = (shows) =>{
     for(let results of shows){
        if(results.show.image){
            const img = document.createElement('IMG');
            img.src = results.show.image.medium;
            document.body.append(img);
        }
        
     }
}