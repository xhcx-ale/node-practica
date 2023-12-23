require('colors');
const { Menu } = require('./helpers/inquirer');

console.clear();

const main = async() => {
    console.log('Maquinitas.');

    let opt = '';

    do {
        opt = await Menu();
        console.log({ opt });
        await pausa();
    } while( opt !== '0' )
}

main();