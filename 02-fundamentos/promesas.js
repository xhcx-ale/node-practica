const empleados = [
    {
        id: 1,
        nombre: 'Ale'
    },
    {
        id: 2,
        nombre: 'Alex'
    },
    {
        id: 3,
        nombre: 'Alejandro'
    },
    {
        id: 4,
        nombre: 'Aj'
    }
];

const salarios = [
    {
        id: 1,
        salario: 999
    },
    {
        id: 2,
        salario: 99
    },
    {
        id: 3,
        salario: 9999
    }
];

const getEmpleado = ( id ) => {
    
    return new Promise( ( resolve, reject ) => {
        
        const empleado = empleados.find( (e) => e.id === id )?.nombre;

        ( empleado ) 
           ? resolve( empleado )
           : reject( `No existe empleado con id ${ id }` );
    } );

},
getSalario = ( id ) => {

    return new Promise( ( resolve, reject ) => {
        
        const salario = salarios.find( (s) => s.id === id )?.salario;

        ( salario )
            ? resolve( salario )
            : reject( `El usuario con id: ${id} no tiene salario, porque no existe.` );
    } );

};

const id = 3;

// getEmpleado(id)
//     .then( empleado => console.log( empleado ) )
//     .catch( err => console.log( err ) );
// 
// getSalario(id)
//     .then( salario => console.log(salario) )
//     .catch( err => console.log(err) );

// getEmpleado(id)
//     .then( empleado => {
// 
//         getSalario(id)
//             .then( salario => {
//                 console.log( 'El empleado: ', empleado, 'tiene un salario de: ', salario );
//             } )
//             .catch( err => console.log(err) );
// 
//     } )
//     .catch( err => console.log(err) );

let nombre;

getEmpleado(id)
    .then( empleado => { 
        nombre = empleado;
        return getSalario(id)
    })
    .then( salario => console.log( 'El empleado: ', nombre, ' tiene un salario de: ',salario ))
    .catch( err => console.log( err ) );