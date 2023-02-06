// REMEMBER TO RUN 'npm install' in your terminal
// These lines make "require" available
import { createRequire } from "module";
const require = createRequire(import.meta.url)
import {franc} from 'franc'
const langs = require('langs');
const colors = require('colors');




const input = process.argv[2];
const langCode = franc(input);

if(langCode === 'und'){
    console.log("SORRY, COULDNT FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT".red);
}else{
    const laungaue = langs.where('3',langCode);
    console.log(`Our best Guess is: ${laungaue.name}`.green);
}
