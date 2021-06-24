//OBJETOS
    //La diferencia entre un tipo primitivo y un objeto es que no tienen metodos ni atributos.
    let x = 10;
    console.log(x.length); // aparecera undefined
    //Un objeto puede tener propiedades y attributos
    //Se crea un objeto en memoria y se le asigna una referencia en memoria
    let persona = {
        nombre:'Raul',
        apellido:'Roman',
        email:'rroman@gmail.com',
        edad:30,
        //Agregaremos un metodo para concatenar
        nombreCompleto: function(){
            return this.nombre+" "+this.apellido;
        }
    }
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.edad);
    console.log(persona.nombreCompleto());

//CREAR UN NUEVO OBJETO CON LA PALABRA RESERVADA NEW
    //Al crearlo de esta manera el objeto se crea vacio sin atributos, aunque no es la manera mas comun
    let persona2 = new Object();
    persona2.nombre = 'Carlos';
    persona2.apellido = 'Torres';
    persona2.direccion ='Saturno 21';
    

//ACEDER A LAS PROPIEDADES DE LOS OBJETOS
    //Un objeto tambien podemos acceder a sus propiedades como si fuera un arreglo
    console.log(persona['apellido']);
    //Tambien se pueden recorrer lasp propiedades mediante un for diferente un for in/
    //FOR IN
    for (nombrePropiedad in persona){
        console.log(persona[nombrePropiedad])
        console.log(nombrePropiedad);
    }

    //Agregar y eliminar propiedades de un objeto
    persona.telefono = 1231131;
    console.log(persona);
    //Hay que tener cuidado al modificar valores de atributos ya que si ponemos mal el nombre de un atributo agregaremos otro en lugar de modificar los valores del que queriamos
    persona.telefon0 = 111;
    console.log(persona);
     //se agrego un nuevo atributo al final por escribir mal la palabra telefono.

     //Eliminar propiedades
     delete persona.telefon0;
     console.log(persona);

//DISTINTAS FORMAS DE IMPRIMIR UN OBJECT EN JS

    //Concatenar cada valor de cada propiedad
    console.log(persona.nombre+ " " + persona.apellido +" "+persona.email+" "+persona.edad);

    //For in
    for(nombreProp in persona){
        console.log(persona[nombreProp]);
    }

    //Sintaxis de object.values
    let personaArray = Object.values(persona);
    console.log(personaArray);

    //Convertir el objeto en una cadena, de esta manera lo podemos imprimir sin ningun problema
    let personaString = JSON.stringify(persona);
    console.log(personaString);

//CONCEPTO DE LOS METODOS GET Y SET
//Son mejores practicas para acceder y modificar los valores de las propiedades de nuestros objetos.

    let cliente = {
        nombre:'Raul',
        apellido:'Roman',
        email:'rroman@gmail.com',
        edad:30,
        idioma:'ES',
        get lang(){
            return  this.idioma.toUpperCase();
        },
        set lang( lang){
            this.idioma = lang.toUpperCase();
        },
        //cambiaremos la funcion por un get
        get nombreCompleto(){
            return this.nombre+" "+this.apellido;
        }
    }

    //console.log(cliente.nombreCompleto()); //ya no nos permite imprimirlo de esta manera ya que ya no es una funcion
    console.log(cliente.nombreCompleto); //ahora de esta manera podemos llamarlo con el get

//SET EN JS
        //para llamar el set no es necesario usar la palabra reservada.
        
        cliente.lang = 'en';
        console.log(cliente.lang);

//METODOS CONSTRUCTORES
    //Se recomienda que los metodos que van a ser constructores de objetos inicien con mayuscula
    //Funcion tipo constructor de personas
    function Persona(nombre,apellido,email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.nombreCompleto = function (nombre,apellido){
            return this.nombre +" "+ this.apellido;
        }
    }

    //Crear objetos
    let padre = new Persona();
    padre.nombre = "Pedro";
    padre.apellido = "Sola";
    padre.email = "psola1990@gmail.com";
    console.log(padre);
    

    let madre = new Persona();
    madre.nombre = "Gabriela";
    madre.apellido ="Gomez";
    madre.email = "ggomez@gmail.com";
    console.log(madre);

//AGREGAR METODOS A UN METODO CONSTRUCTOR
    // Se agrega un nuevo atributo pero despues del asignador agregarmos la funcion.
    console.log(padre.nombreCompleto());
   
//DISTINTAS FORMAS DE CREAR OBJETOS EN JS

    //En algunos casos hay sintaxis que nos ayudan para crear objetos sin el uso de la palabra new.
    //Opcion mas formal
    let miObjeto = new Object();
    //Esta forma es mas preferible
    let miObjeto2 = {};
    
    let miCadena1 = new String();
    let miCadena2 = "hola";

    let numero = new Number(1);
    let numero2 = 1;

    let miArreglo1 = new Array();
    let miArreglo2 = [];

    let miFuncion = new Function();
    let miFuncion2 = function(){};
    
// USO DE PROTOTYPE EN JAVASCRIPT
    //Para agregar una propiedad de un objeto que afecte a todos los objetos creados de el constructor deberemos usar prototype
    //Los objetos padre y madre creados con el constructor de persona no contenian ninguna propiedad .tel 
    //La cual se la agregaremos de la siguiente manera:
    Persona.prototype.tel = "443322";

    console.log(padre.tel);
    console.log(madre.tel);

//USO DE CALL EN JS
    //Aunque a veces no se tenga un metodo constructor aun asi podemos utilizar metodos definidos en otros objetos y mandarlos a llamar desde otros objetos
    let personaUno  = {
        nombre:'Raul',
        apellido:'Roman',
        nombreCompletoCall: function(titulo,telefono){
            return titulo+" "+this.nombre+" "+this.apellido+ " "+telefono;
            //return this.nombre +" "+ this.apellido
        }
    }
    let personaDos  = {
        nombre:'Josue',
        apellido:'Torres'
    }
    //Vamos a hacer uso de call para usar el metodo de nombreCompleto que pertenece al objeto personaUno con los datos de PersonaDos
//PASO DE ARGUMENTOS EN JS
    
    console.log(personaUno.nombreCompletoCall('Lic','11233'));
    console.log(personaUno.nombreCompletoCall.call(personaDos,'Ing','555444333'));

//METODO APPLY EN JS
    //vamos a quitar nuestros parametros dentro de el metodo de nombreCompleto en personaUno (titulo y numero) agregados para ejemplo de paso de argumentos
    //USO DE APPLY
    console.log(personaUno.nombreCompletoCall('Lic', 4441121));
    //Al parecer funciona exactamente igual a el uso de call
    //Pero ahora vamos a habilitar los parametros que eliminamos
    //Para el apply se debe definir un arreglo y pasamos los valores que vamos a pasara al metodo de nombre completo
    let arreglo = ['Ing','23121'];
    console.log(personaUno.nombreCompletoCall.apply(personaDos, arreglo));
    console.log(personaUno.nombreCompletoCall.apply(personaDos,['Lic','1231131545455'])); 