const bcrypt = require('bcrypt');

// creating hashpassword with salt 
// const hashPassword = async(pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash( pw ,salt );
//     console.log(hash);
//     console.log(salt);
// }

// creating salt and hashPassword simultaneously

const hashPassword = async(pw) => {
    const hash = await bcrypt.hash( pw ,12 );
    console.log(hash);
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

login('monkey', '$2b$12$PNyjxoMKW48xxSBxI3CkF.SaIE4duDr9.84qWeVNoSy8I80TweMK.');// 