//USO DE OPERADORES EN JavaScript

/*
    + Adiccion
    - Substraccion
    * Multiplicacion
    ** Exponenciacion
    / Division
    % Modulo (Reminder) Residuo de una division
    ++ Incremento
    -- Decremento
*/

let a =3, b =2;
let res = a+b;
//console.log("Resultado de la suma : "+res);

res = a-b;
//console.log ("Resultado de la resta: "+ res);

res = a * b;
//console.log ("Resultado de la multiplicacion:" +res );

res = a / b;
//console.log("Resultado de la division"+ res);

res = a % b;
//console.log("Residuo de la division: "+res);

res = a ** b;
//console.log("Resultado de exponente " + res);

//INCREMENTO Y DECREMENTO

//PostIncremento

//En este ejemplo el incremento se da despues de usar la variable, por lo que no se refleja en el resultado impreso.
res = a++;
//console.log("Resultado de incremento variante 1: "+res);

//PreIncremento
//En este ejemplo el incremento se da antes de usar la variable por lo que si se toma en cuenta al imprimirlo, teniendo en cuenta que el paso anterior 4+1 nos da el resultado actual.
res = ++a;
//console.log("Resultado de incremento variante 2: "+ res)

//PostIncremento

//En este ejemplo el decremento se da despues de usar la variable, por lo que no se refleja en el resultado impreso.
res = a--;
//console.log("Resultado de incremento variante 1: "+res);

//PreIncremento
//En este ejemplo el decremento se da antes de usar la variable por lo que si se toma en cuenta al imprimirlo
res = --a;
//console.log("Resultado de incremento variante 2: "+ res);

//PRECEDENCIA DE OPERADORES
let x=3,y=2,z=1,d = 4;

//Se evalua de izquierda a derecha la ponderacion de la jerarquia de operadores
res = x * y + z / d;
//console.log(res);
res = x + y * z /d;
//console.log(res);

//OPERADORES DE ASIGNACION

a = 1;
// el = funciona como operador de asignacion de la literal (lado derecho de el =) a la variable a
a += 1; // a = a + 3
//console.log(a);
a -= 2; // a = a -2
//console.log(a);
a=5;
a *= 2; // a = a *2
//console.log(a);
a /= 2 // a = a / 2 
//console.log(a);
a **= 2; // a= a * a
//console.log(a);
a %= 2;
//console.log(a);


//OPERADORES DE COMPARACION

    //el resultado de estos es boolean

a =3, b=2, c="3";

z = a==c; // revisa el valor sin importar el tipo
console.log(z)
//En este caso se revisa el valor pero tambien los tipos
z = a===c; // modo de comparacion estricto
console.log(z)


//OPERADORES DISTINTO A

//Operador distinto a normal que no importa tipo
console.log(a !=c )
//Operador distinto a estricto
console.log(a !== c )

//OPERADORES RELACIONALES
a=3, b=3, c="3"
z = a < b;
console.log(z)

z = a > b;
console.log(z)

z = a <= b
console.log(z)
z = a >= b 
console.log(z)

// Ejercicio numero par de JavaScript

 let val = 10;
 if(val % 2 == 0){
    console.log("Es un numero par")
 }else{
     console.log("Es un numero impar")
 }

//Ejercicio mayoria de edad

let edad = 10, adulto = 18;

if(edad >= adulto){
    console.log("La persona es adulta");
}else{
    console.log("La persona es menor de edad");
}

//OPERADOR AND EN JavaScript
let valMin=1, valMax=10;
val =150;
//Si ambas condiciones no son verdaderas sera falso
if(val >= valMin && val <= valMax){
    console.log("El valor esta dentro de rango")
}else{console.log("Se esta fuera de rango")}

//Con una de las expresiones que se cumpla sera verdadero, por lo que hay que tener cuidado al usar el OR
if(val >= valMin || val <= valMax){
    console.log("El valor esta dentro de rango")
}else{console.log("Se esta fuera de rango")}

//OPERADOR TERNARIO EN JavaScript
 let Resultado = (3<2)? "Verdadero" : "Falso"
 console.log(Resultado);


 let numero2 = 110
 resultado = (numero2 % 2 == 0)? "Numero Par":"Numero Impar";
 console.log(resultado)

// Convertir String a Number en JavaScript

let miNumero = "17x";
console.log(miNumero)
//console.log( typeof miNumero);
//La funcion Number convierte un string en un numero
let edad2 = Number(miNumero);
console.log(typeof edad2);
if(edad2 >= 18){
    console.log("Puede votar");
}else{
    console.log("Muy joven para votar");
}
resultado = (edad2 >=18)? "Puede votar":"No puede votar, es muy joven";
console.log(resultado)


//FUNCION IS NaN EN JavaScript
// Pregunta si el valor de la variable es un numero, por ejemplo 18z ya no podria ser convertido a un tipo number, y aunque se pueda convertir 
// su valor ya no seria numerico

miNumero = "17x";
console.log(miNumero)
//console.log( typeof miNumero);
//La funcion Number convierte un string en un numero
edad2 = Number(miNumero);
console.log(edad2) // proporcion un Not a Number debido a la x en la cadena

if(isNaN(edad2)){
    console.log("No es un numero");
}else{
        console.log("Es un numero");
}


//Ejemplos de Precedencia de Operadores
 let xx=5; 
 let yy =10;
 let zz = ++xx+yy--; // La literal xx se convierte en 6 y la yy permanece como 10 ya que el decremento se hizo despues de utilizar su valor.
console.log(zz)


















