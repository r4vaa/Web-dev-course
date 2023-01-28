const fakeRequest = (url) => {
 	return new Promise ((resolve, reject) => {
		const rand = Math.random();
		setTimeout(()=> {
			if(rand < 0.7){
				resolve('Your data is here');
			}else
			{
				reject('OHH no , no data');
			}
			
		},1000);
  	})
}

fakeRequest('dog/pag1')
	.then((data) => {
		console.log('resolved');
		console.log(data);
	})
	.catch((err) => {
		console.log('sorry');
		console.log(err)
	})