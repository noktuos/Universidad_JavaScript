//Funciones Flecha

function miFuncion(){
    console.log('saludos desde mi funcion');
}

miFuncion();

//Funcion flecha
//En estas no se aplica el hoisting

//la funcion puede asignarse con let, pero al trabajar con funciones se recomienda mas el uso de const para no poder asignar un valor nuevamente a la variable
// a la cual estamos asignando la funcion
//No tienen enlaces this o super como otras funciones
//No tienen argumentos
// no apta para metodos call apply o bind
//No pueden ser constructores
//No permiten el uso de yield


// const miFuncionFlecha = () => {
//     console.log('hola desde funcion flecha');
// }

// const miFuncionFlecha = () => console.log('hola desde funcion flecha');
// miFuncionFlecha();

// const saludar = () => {return 'Saludos desde funcion flecha';}

// console.log(saludar());

const saludar = () => 'Saludos desde funcion flecha';
console.log(saludar());

//Si queremos regresar un objeto se tiene que hacer una modificacion en la funcion flecha

const regresaObjeto = () => ({nombre:'Juan', apellido: 'Rocha'});
console.log(regresaObjeto());

const funcionConParametros = (mensaje) => console.log(mensaje);

funcionConParametros('holiwi');

// const funcionConParametros2 = (op1,op2) => op1+op2;
const funcionConParametros2 = (op1,op2) => {
    return  op1+op2;
}
//console.log(funcionConParametros2(3,5));

//Funciones Callback en JS
//Basicamente seria mandar a llamar una funcion dentro de otra funcion pero con la funcion que la llama de referencia

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(operando1,operando2, functionCallBack){
    let res = operando1+operando2;
    functionCallBack(res);
}

sumar(5,3, imprimir);

//El uso que se le da a las funciones de tipo callback es que se puedan utilizar en procesos que se ejecutan de manera asyncrona
// Llamadas asincronas con uso de setTimeout

function miFuncionCallback(){
    console.log('saludo asincrono despues de 3 segundos');
}

setTimeout(miFuncionCallback,3000);//Ejecucion despues de 3 segundos

setTimeout(function(){console.log('Saludo asincrono 2')}, 1000);

setTimeout(() => console.log('Saludo asincrono flecha'),500);
