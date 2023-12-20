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

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( (e) => e.id === id )?.nombre;
if ( empleado ) {
    callback( null, empleado );
} else {
    callback( `Empleado con id ${ id } no existe.` );
}
}

const getSalario = ( id, callback ) => {
    const salario = salarios.find( (e) => e.id === id )?.salario;
if ( salario ) {
    callback( null, salario );
} else {
    callback( `Empleado con id ${ id } no existe, no salario.` );
}
}

id = 4;
getEmpleado( id, ( err, empleado ) => {
  if ( err ) {
    console.log('¡ERROR!');
    return console.log(err);
  }
  getSalario( id, ( err, salario ) => {
      if ( err ) {
        console.log('¡ERROR!');
        return console.log(err);
      }
      console.log('Empleado:', empleado, 'tiene un salario de:', salario);
    })

})
