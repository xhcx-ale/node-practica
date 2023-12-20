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

}

const getSalario = () => {

    return new Promise( ( resolve, reject ) => {
        
        const salario = salarios.find( (s) => s.id === id )?.salario;

        ( salario )
            ? resolve( salario )
            : reject( `El usuario con id: ${id} no tiene salario, porque no existe.` );
    } );

}

const getInfoUsuario = async( id ) => {

    try {
    
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);

    return `El salario del empleado: ${ empleado } es de ${salario}`;
    
    } catch (error) {
        throw error;
    }
}

const id = 4;

getInfoUsuario( id )
    .then( msg => {
         console.log(msg) 
    })
    .catch( err => {
         console.log( err )
    });
