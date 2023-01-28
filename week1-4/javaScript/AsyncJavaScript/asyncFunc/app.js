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


const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if(password === 'corgifeetarecute') return 'welcome!'
    throw 'Invalid Password'

}

login('dheeraj','hhh' )
    .then(msg => {
        console.log('logged in');
        console.log(msg)
    })
    .catch(err => {
        console.log('ERROR!!');
        console.log(err)
    })