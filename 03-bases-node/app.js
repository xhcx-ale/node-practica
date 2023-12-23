//const { argv, options } = require('yargs');
console.clear();
const argv = require('./config/yargs');
const { createTxt } = require('./helpers/multiplicar');
//const [ , numTabla] = arg3.split('=');
//const [ , , arg3 = 'numTabla=5' ] = process.argv;


//console.log( argv ); 




//console.log(process.argv);
//let numTabla = 5;


createTxt( argv.n, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo, 'creado.'.underline.red ) )
    .catch( err => console.log(err) );