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

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( (e) => e.id === id )
if ( empleado ) {
    callback( null, empleado );
} else {
    callback( `Empleado con id ${ id } no existe.` );
}
}

getEmpleado( 4, ( err, empleado ) => {
  if ( err ) {
    console.log('¡ERROR!');
    return console.log(err);
  }
  console.log('¡Empleado existe!');
  console.log(empleado);
})