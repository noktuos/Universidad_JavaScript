var nombre = "Josue";

//console.log(nombre);

//Tipos de datos

var str = "Prueba String"; //Llevan doble comilla
//console.log(str);

var num = 100;
//console.log(num);

var objeto ={
    nombre: "Josue",
    apellido: "Torres",
    numero: 63613596000
};
//console.log(objeto)


// Las variables en JS son variables, lo cual significa que podemos modificar el tipo de la variable sobre la marcha.
// El typeof nos proporciona el tipo de variable que tenemos en este momento en la variable a revisar.
//console.log(typeof nombre);
nombre = 1123;
//console.log(typeof nombre);
//console.log(typeof objeto);

//Mas tipos de datos en JavaScript

//boolean
var bandera =false;
//console.log(bandera);

//Una funcion tambien es un tipo de dato
function miFuncion()
{
}
//console.log( typeof miFuncion);

//Tipo de dato symbol
var simbolo = Symbol("mi simbolo");
//console.log(typeof simbolo)

//Las clases en JavaScript tambien son funciones
class Persona{
    constructor(nombre,apellido)
    {
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
//console.log(typeof Persona)

//Tipo de dato undefined
var x;
//console.log(typeof x);

//Tipo null = ausencia de valor
var y=null;
//console.log(typeof y);

// Arrays en JS (son tipo object)
var autos=['BMW','Audi','Nissan'];
//console.log(autos);
//console.log(typeof autos);

//Empty string
var z='';
//console.log(z);
//console.log(typeof z)

//Concatenacion de cadenas en JavaScript
var nombre = "Josue";
var apellido = "Torres";

var nombreCompleto = nombre +" "+ apellido;
//console.log(nombreCompleto);

//Las expresiones se evaluan de izquierda a derecha --->
var x = nombre + 219;
//console.log(x)
x= nombre + (2+4);
//console.log(x)




















