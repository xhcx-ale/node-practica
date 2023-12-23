const argv = require('yargs')
.option('n', {
    alias: 'numTabla',
    type: 'number',
    demandOption: true,
    describe: 'Número a multiplicar.'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Lista la tabla del número digitado.'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: false,
    describe: 'Multiplicar hasta.'
})
.check( (argv, options) => {
    if( isNaN( argv.n ) ){
        throw 'Debe asignar un  número a la opción.'
    }
    return true;
})
.argv; 

module.exports = argv;