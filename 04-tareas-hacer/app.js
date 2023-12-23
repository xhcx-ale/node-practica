require('colors');
const { menuShow, pausa } = require('./helpers/mensajes');

console.clear();

const main = async() => {
    console.log('Maquinitas.')
    menuShow();
    pausa();
}

main();