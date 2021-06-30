//Si empezamos a utilizar una variable sin haberla declarado JS no nos da ningun error, pero el modo strict evita esto, ya que se consideran malas practicas
//Se recomienda el uso estricto sobre todo en proyectos grandes.
'use strict'
//x = 10; //Nos da un error de que x no esta definida
let x = 10;
console.log(x);

//Funciona de la misma forma para las funciones
//De igual manera se puede usar dentro de nuestra funcion para evitar lo mismo pero dentro de la funcion unicamente
function miFuncion(){
    'use strict'
    let y=4;
    console.log(y);
}