//setTimeout( function() {
//    console.log('SII');
//}, 1000 );

//setTimeout( () => {
//    console.log('SII');
//}, 1000 );

const getUserID = ( id, callback ) => {
    const usuario = {
        id,
        nombre: 'ale'
    }

    setTimeout( () => {
        callback( usuario );
    }, 1500 )

}

getUserID( 11, ( usuario ) => {
    console.log( usuario.id );
    console.log( usuario.nombre.toUpperCase() );
});