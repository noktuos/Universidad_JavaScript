//Uso de variables en JavaScript (var, const y let)
//variable = literal

//No es buena practica pero sin embargo funciona como sintaxis correcta
nombre = "Juan";
console.log(nombre);

//Manera correcta
let nombreCorrecto;
nombreCorrecto= "Juan";
console.log(nombreCorrecto);

const apellido = "Torres";
//apellido ="LARA";   ---> Genera error ya que no se puede cambiar el valor de const una vez asignado.

/*  
let es para definir variables 
const para definir literales que no van a cambiar
*/

//Mejores practicas para nombres de variables

//Sinstaxis de camello
let nombreCompleto = "Josue Torres";
console.log(nombreCompleto);
//Declaracion de multiples variables en la misma linea
let x,y;
x=10, y=20;
let z = x + y;


//Reglas para definir nombres en JavaScript
//JavaScript es case senstive, hay que tener cuidado con ello
    nombreCompleto = "Josue Torres";
    let nombrecompleto = "Jesus Macarena";

    console.log(nombreCompleto);
    console.log(nombrecompleto)

//No comenzar una varible utilizando numeros
    //let 1nombrecompleto;

//Solo se permiten letras Mayus/Minus | _ | $
let _nombreCompleto;
let $nombreCompleto;
let a1nombreCompleto;

//No se permiten palabras reservadas para JavaScript, se puede modificandolas pero se recomeinda no hacerlo
    //let for = "";
    //let break = "";





