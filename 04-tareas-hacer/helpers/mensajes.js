require('colors');

const menuShow = () => {

    return new Promise( resolve => {
       // console.clear;
        console.log(`====================================
                ${'Opción:'.cyan}
====================================\n`);
    
        console.log(`${ '1.'.green} Crear tarea.`);
        console.log(`${ '2.'.green} Listar tareas.`);
        console.log(`${ '3.'.green} Listar tareas completadas.`);
        console.log(`${ '4.'.green} Listar tareas pendientes.`);
        console.log(`${ '5.'.green} Completar tarea.`);
        console.log(`${ '6.'.green} Borrar tarea.`);
        console.log(`${ '0.'.green} Salir.\n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccionar opción: ', (opt) => {
            readline.close();
            resolve(opt);
        })
        
    });


}

const pausa = () => {
    return new Promise( resolve => {
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nPresione ${ 'ENTER'.magenta } para continuar.\n`, (opt) => {
            readline.close();
            resolve();
        })
    })
}

module.exports = {
    menuShow,
    pausa
}