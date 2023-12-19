const sillei = {
    nombre: 'Carl',
    apellido: 'yonso',
    poder: 'Robar',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }
} 

//const nombre = sillei.nombre;
//const apellido = sillei.apellido;
//const poder = sillei.poder;

// DESESTRUCTURACIÓN

function characPrint( { nombre, apellido, poder, edad = 28 } ) {
//function characPrint( character ) {
   // const { nombre, apellido, poder, edad = 28 } = character;
    console.log( nombre, apellido, poder, edad );
}

//characPrint( sillei );

const characters = ['Sillei', 'Maikol', 'Nicoveli'];

// const c1 = characters[0];
// const c2 = characters[1];
// const c3 = characters[2];

const [ , , c3 ] = characters;

console.log( c3 );

//const { nombre, apellido, poder, edad = 28 } = sillei;
//console.log( nombre, apellido, poder, edad );