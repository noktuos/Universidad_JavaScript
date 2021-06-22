//Las funcuiones son codigo reutilizable, el cual podremos ir repitiendo a lo largo de el codigo tantas veces como se requiera
//Las funciones pueden ser llamadas antes de su declaracion por medio del principio de hoisting
/* 
    Hoisting o elevacion es el comportamiento por defecto que JS de mover las declaraciones al principio del codigo.
    Lo cual nos permitiria llamar una funcion antes de ser declarada y poder utilizarla sin ningun problema independientemente de su posicion.
    Ya que JS llevara "al principio del codigo" nuestra funcion y la hara disponible para usarse en cualquier momento.
*/
//La funcion puede ser llamada antes de declararse por el principio de hoisting
miFuncion(20,1);
//Sintaxis y declaracion
function miFuncion (a,b){
    console.log(arguments.length)
    console.log("Suma: "+ (a+b));
}
//Primero se declara y luego se manda a llamar la funcion
miFuncion(3,5);

//USO DE LA PALABRA RETURN
    function returnFunc (a,b){
    return a+b;
    };

    //La funcion retorna un valor que puede ser asignado a una variable para ser utilizada.
    var resultado= returnFunc(3,5);
console.log(resultado);
//FUNCIONES TIPO EXPRESION
//Declaracion de funcion de tipo Expresion o anonimas (sin nombre de funcion)
//Al ser una linea que se ejecuta tiene que llevar ; al final
let x = function(a,b){
    return a+b;
};

//Uso de funcion de expresion
resultado = x(5,5);
console.log(resultado);

//FUNCIONES SELF INVOKING
    //Son funciones anonimas que se pueden mandan a llamar a si mismas

    (function (){
        console.log('Ejecutando la funcion');
    })(); // De esta manera se manda a llamar
    //contras: Solo se puede mandar a llamar una unica vez, no puede volverse a utilizar ya que no se asigno a una variable ni un nombre.

//FUNCIONES COMO OBJETOS
    console.log(typeof miFuncion);
    //las funciones tambien pueden ser descritas como objetos

    //Si deseamos saber cuantos argumentos tiene nuestra funcion podemos utilizar la propiedad arguments
    //Para pedir el numero de argumentos tenemos que estar dentro del bloque de la funcion.

    var miFuncionTexto = miFuncion.toString();
    //El resultado deberia ser la funcion en formato de texto en la consola. Para entender que las funciones se pueden describir como objetos con propiedades y metodos
    console.log(miFuncionTexto);

//FUNCIONES FLECHA
    //Funcion expresion
    let sumar = function (a,b){return a+b};
    //Funcion flecha, no es necesario el uso de la palabra function. y usaremos const para que no podamos modificar el valor.
    //Tambien ya no es necesario el uso de llaves si no el uso del simbolo flecha =>
    //Tampoco es necesario usar el return.
    const sumarFuncionFlecha = (a,b) => a+b;
    resultado = sumarFuncionFlecha(3,5);
    console.log(resultado);

//PARAMETROS Y ARGUMENTOS EN JS
    //Las variables que recibe una funcion al momento de declararla se les conoce como paramentros.
    //Los argumentos son los valores reales que finalmente se van a asignar a los parametros de nuestra funcion.

    let sumar2 = function (a,b){
        //Revisar argumentos
        console.log(arguments[0]);
        console.log(arguments[1]);
        console.log(arguments[2]);
        arguments[1];
        return a+b;
    }
    //En este caso la cantidad de arguentos no equivale a la cantidad de parametros, en JS esto es correcto ya que no deben de coincidir forsozamente.
    //Para acceder a ese argumento podemos hacerlo mediante el uso de arguments[n] que equivalga a el argumento extra.
        resultado = sumar2(1,2,3);
        console.log(resultado);

    //EJERCISIO : SUMAR TODOS LOS ARGUMENTOS

        let resultadoFinal = sumarTodo(5,4,13,10,9);
        console.log(resultadoFinal);
        function sumarTodo(){
            let suma = 0;
            for(let i = 0; i <arguments.length;i++){
                suma += arguments[i];
            }
            return suma;
        }

//PASO POR VALOR EN FUNCIONES EN JS
    //Es cuando usamos tipos que no son objetos

    //tipo primitivo (sin atributos ni metodos asociados)
    let xx=10;
    //Vamos a intentar cambiar este valor desde el metodo, lo cual no va a ser posible por ser tipo primitivo
    //Solo se pasara una copia de el valor de esa variable para poder hacer el cambio
    function cambiarValor(a){
        a = 20;
    }

    cambiarValor(xx);
    console.log(xx);
    //Como podemos ver no se cambio el valor de la variable x, a esto se le conoce como paso por valor.
    //Ya que la varible xx solo paso su valor a la variable 'a' 
    //Pero el valor de a ya no puede ser utilizado fuera de la funcion, ya que este al terminar la llamada a la funcion se destruye.
   // console.log(a); //aparece como not defined


//PASO POR REFERENCIA EN JS

    //Vamos a crear un objeto al cual se le pueden asignar propiedades y metodos.
    //Lo recomendable para los objetos es que se presenten como tipo constante
    const persona =  {
        nombre:'JUAN',
        apellido:'ROCHA'
    }
    
    //La variable de persona apunta a un objeto que contiene  2 atributos : Nombre y apellido, que se crearon con el valor de juan y rocha, pero el metodo de cambiar valor
    //accede a la referencia de este objeto el cual sigue apuntando a la variable inicial por lo que estariamos modificando el valor en memoria
    //En criollo seria Persona = p1 
    function cambiarValorObjeto(p1){
        p1.nombre='Carlos';
        p1.apellido='Lara'
    }

    //Cambio por referencia
    cambiarValorObjeto(persona);
    //Resultado
    console.log(persona.nombre);
    console.log(persona.apellido);