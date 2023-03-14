const bcrypt = require('bcrypt');

// creating hashpassword with salt 
const hashPassword = async(pw) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash( pw ,salt );
    console.log(hash);
    console.log(salt);
}

// compare the pass with hashedPassword

const login = async (pw , hashedPassword) =>{
    const result = await bcrypt.compare(pw , hashedPassword);
    if(result) {
        console.log('Logged You IN! SUCCESSFUL MATCH!');
    }else {
        console.log('INCORRECT');
    }
}

// hashPassword('monkey');

login('monkey', '$2b$12$t5BK/mmJewquXVoaOWaK1eQvSxYo2wrmn9e6NNgpRH6SUXqG57yk1');