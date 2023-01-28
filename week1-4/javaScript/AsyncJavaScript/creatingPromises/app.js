	//  Creating a new Promise

// const fakeRequest = (url) => {
//  	return new Promise ((resolve, reject) => {
// 		const rand = Math.random();
// 		setTimeout(()=> {
// 			if(rand < 0.7){
// 				resolve('Your data is here');
// 			}else
// 			{
// 				reject('OHH no , no data');
// 			}
			
// 		},1000);
//   	})
// }

// fakeRequest('dog/pag1')
// 	.then((data) => {
// 		console.log('resolved');
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log('sorry');
// 		console.log(err)
// 	})

const delayedColor = (color, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() =>{
			document.body.style.backgroundColor = color;
			resolve();
		}, delay)
	})
}

delayedColor('red',1000)
	.then(() => delayedColor('orange',1000))
	.then(() => delayedColor('green',1000))
	.then(() => delayedColor('blue',1000))
	.then(() => delayedColor('teal',1000))
	.then(() => delayedColor('grey',1000))
	.then(() => delayedColor('indigo',1000))
	.then(() => delayedColor('violet',1000))
	