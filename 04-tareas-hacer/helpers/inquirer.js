const inquirer = require('inquirer');
require('colors');

const opts =  [
    {
        type: 'list',
        name: 'option',
        messag: '¿Qué desea hacer?',
        choices: [ 'opt1', 'opt2', 'opt3' ]
    } 
];

const Menu = async() => {
    console.clear;
    console.log(`====================================
            ${'Opción:'.cyan}
====================================\n`);

    const opt = await inquirer.prompt(opts);
    return opt;

}

module.exports = {
    Menu
}