const { error } = require('console');
const { createTxt } = require('./helpers/multiplicar');
console.clear();

const [ , , arg3 = 'numTabla=5' ] = process.argv;
const [ , numTabla] = arg3.split('=');
console.log( numTabla );
//console.log(process.argv);
//let numTabla = 5;


createTxt( numTabla )
    .then( nombreArchivo => console.log( nombreArchivo, 'creado.' ) )
    .catch( err => console.log(err) );

