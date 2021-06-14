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
console.log("Resultado de la suma : "+res);

res = a-b;
console.log ("Resultado de la resta: "+ res);

res = a * b;
console.log ("Resultado de la multiplicacion:" +res );

res = a / b;
console.log("Resultado de la division"+ res);

res = a % b;
console.log("Residuo de la division: "+res);

res = a ** b;
console.log("Resultado de exponente " + res);

//INCREMENTO Y DECREMENTO

//PostIncremento
//En este ejemplo el incremento se da despues de usar la variable, por lo que no se refleja en el resultado impreso.
res = a++;
console.log("Resultado de incremento variante 1: "+res);
//PreIncremento
//En este ejemplo el incremento se da antes de usar la variable por lo que si se toma en cuenta al imprimirlo, teniendo en cuenta que el paso anterior 4+1 nos da el resultado actual.
res = ++a;
console.log("Resultado de incremento variante 2: "+ res)

//PostIncremento
//En este ejemplo el decremento se da despues de usar la variable, por lo que no se refleja en el resultado impreso.
res = a--;
console.log("Resultado de incremento variante 1: "+res);
//PreIncremento
//En este ejemplo el decremento se da antes de usar la variable por lo que si se toma en cuenta al imprimirlo
res = --a;
console.log("Resultado de incremento variante 2: "+ res);

//PRECEDENCIA DE OPERADORES
let x=3,y=2,z=1,d = 4;

//Se evalua de izquierda a derecha la ponderacion de la jerarquia de operadores
res = a * b + c / d;
console.log(res);
res = c + a * b /d;
console.log(res);

//OPERADORES DE ASIGNACION

a = 1;
// el = funciona como operador de asignacion de la literal (lado derecho de el =) a la variable a
a += 1; // a = a + 3
console.log(a);
a -= 2; // a = a -2
console.log(a);
a=5;
a *= 2; // a = a *2
console.log(a);
a /= 2 // a = a / 2 
console.log(a);
a **= 2; // a= a * a
console.log(a);
a %= 2;
console.log(a);
