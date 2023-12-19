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

const getSalario = ( id, callback ) => {
    const salario = salarios.find( (e) => e.id === id )
if ( salario ) {
    callback( null, salario );
} else {
    callback( `Empleado con id ${ id } no existe, no salario.` );
}
}

getEmpleado( 3, ( err, empleado ) => {
  if ( err ) {
    console.log('¡ERROR!');
    return console.log(err);
  }
  console.log('¡Empleado existe!');
  console.log(empleado);
})

getSalario( 3, ( err, salario ) => {
    if ( err ) {
      console.log('¡ERROR!');
      return console.log(err);
    }
    console.log('¡Empleado existe!, si salario xd');
    console.log(salario);
  })