const fs = require('fs'),
      colors = require('colors');
//Async regresa una promesa de una función
const createTxt = async( numTabla = 5, listar = false, hasta = 10 ) => {


  try {

    let salida = '';
    for (i=1; i<=hasta; i++){
      multi = numTabla * i;
      salida += `${numTabla}X${i}=${multi}\n`;
    }
    
  if ( listar ){ 
     console.log(`***************************
    TABLA DEL ${ numTabla }
***************************\n${ salida }`.rainbow)
  }


      fs.writeFileSync( './salida/tabla.txt', salida );
      return`¡Tabla del ${numTabla} guardada como texto!`.rainbow;
    
  } catch (err) {
    throw err;
  }

}


module.exports = {
    createTxt
}