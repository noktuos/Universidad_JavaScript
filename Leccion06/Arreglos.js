//Un arreglo es un tipo object que permite almacenar varios valores.
//Diferentes formas para declarar arreglos y mejores practicas para declarar y trabajar con arreglos en js

//Forma antigua, ya no se recomienda usarla
//let autos = new Array('BMW','Mercedes','Volvo');

const autos = ['BMW','MB','Volvo'];
console.log(autos);

//Acceder a elementos de un arreglo
console.log(autos[0]);

for(let i=0;i <autos.length;i++){
    console.log(autos[i]);
}

//Modificar elementos de un arreglo

autos[0]= "Ferrari";
console.log(autos);

//Agregar elementos a un arreglo
autos.push('audi');
console.log(autos)

//Agregar elementos por indice
autos[autos.length]="Cadillac";
console.log(autos);
//Agregar elementos en un indice diferente al que sigue en orden *** NO ES RECOMENDABLE ***
autos[6]= "Nissan";
console.log(autos);

//Preguntar si es un array
console.log(typeof autos) // No nos dice si es un arreglo o no
console.log(Array.isArray(autos)); // nos da true ya que es un arreglo.