// Async and await

// async function hello() {

// }

// const sing = async() => {
//     throw 'ohh noo error'
//     return 'lalalal'
// }

// sing()
//     .then(data=> {
//         console.log('Promised resolved with:',data);
//     })
//     .catch(err => { 
//         console.log('ohhnoo');
//         console.log(err);
//     })


// const login = async (username, password) => {
//     if (!username || !password) throw 'Missing Credentials'
//     if(password === 'corgifeetarecute') return 'welcome!'
//     throw 'Invalid Password'

// }

// login('dheeraj','corgifeetarecute' )
//     .then(msg => {
//         console.log('logged in');
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log('ERROR!!');
//         console.log(err)
//     })


const delayedColor = (color, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() =>{
			document.body.style.backgroundColor = color;
			resolve();
		}, delay)
	})
}

// delayedColor('red',1000)
// 	.then(() => delayedColor('orange',1000))
// 	.then(() => delayedColor('green',1000))
// 	.then(() => delayedColor('blue',1000))
// 	.then(() => delayedColor('teal',1000))
// 	.then(() => delayedColor('grey',1000))
// 	.then(() => delayedColor('indigo',1000))
// 	.then(() => delayedColor('violet',1000))
	
async function rainbow(){
    await delayedColor('red',1000);
    await delayedColor('orange',1000);
    await delayedColor('yellow',1000);
    await delayedColor('teal',1000);
    await delayedColor('grey',1000);
    await delayedColor('indigo',1000);
    await delayedColor('blue',1000);
    await delayedColor('violet',1000);
    return 'ALL Done!s'

}

// rainbow().then(() => console.log('END of Rainbow!'))

async function printRainbow(){
    await rainbow();
    console.log('END of Rainbowssss!');
}

printRainbow();