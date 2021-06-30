//Manejo de errores try catch finally en JavaScript

//Utilizaremos el modo estricto para que no nos permita usar variables sin declarar
'use strict'



//Clausula throws
//Sirve para validar con nuestros propios errores
//El throws unicamente envia el mensaje que nosotros enviemos, a diferencia del catch que podemos separar el tipo de error del mensaje del error
let resultado = -1;

try{
    //x=10;
    if( isNaN(resultado)) throw 'No es un numero';
    else if(resultado ==='') throw 'Es cadena vacia';
    else if(resultado >= 0) throw 'Es positivo';
    else if (resultado < 0) throw 'Valor negativo';
}catch(error){
    console.log(error)
    //console.log(error.name);
    //console.log(error.message);
}finally{
    console.log('termina revision de errores')
}