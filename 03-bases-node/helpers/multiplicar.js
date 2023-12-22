const fs = require('fs');
//Async regresa una promesa de una función
const createTxt = async( numTabla = 5 ) => {


  try {

      console.log(`***************************
          TABLA DEL ${ numTabla }
***************************\n`);
      let salida = '';
      for (i=1; i<=10; i++){
      multi = numTabla * i;
      salida += `${numTabla}X${i}=${multi}\n`;
    }
    
      console.log(salida);
      fs.writeFileSync( 'tabla.txt', salida );
      return`¡Tabla del ${numTabla} guardada como texto!`;
    
  } catch (err) {
    throw err;
  }

}


module.exports = {
    createTxt
}