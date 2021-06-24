//CLASES EN JAVASCRIPT
    //Una clase es una plantilla, en esta vamos a definir los metodos y los atributos.
    //Un objeto es una instancia de una clase.

//EN LAS CLASES NO APLICA EL CONCEPTO DE HOISTING
    //let persona2 = new Persona('Gabriel','Quadri'); //Nos da el error de Cannot access 'Persona' before initialization

    //Sintaxis
    class Persona{
        constructor(nombre,apellido){
            this._nombre = nombre;
            this._apellido = apellido;
        }
        get nombre(){
            return this._nombre;
        }
        //Cuando se trabaja con clases ya no es necesario poner comas entre los metodos
        set nombre(nombre){
            this._nombre=nombre;
        }
        get apellido(){
            return this._apellido;
        }
        set apellido(apellido){
            this._apellido=apellido;
        }
        nombreCompleto(){
            return this._nombre +" "+ this._apellido;
        }
        //sobre escribiendo el metodo de la clase padre (object)
        toString(){
            //se aplica polimorfismo en esta llamada
            return this.nombreCompleto();
        }
    }

    let persona1 = new Persona('Ricardo','Anaya');
    console.log(persona1);

//Metodos GET y SET
    //El metodo get no se puede llamar igual que nuestra propiedad, normalmente se acostumbra para esto poner un _ antes del nombre.
    //De esta manera al llamar a la funcion nombre nos traera el del objeto correctamente, de lo contrario la funcion se llamaria a si misma infinitamente.
    console.log(persona1.nombre);
    persona1.nombre = 'Arturo';
    console.log(persona1.nombre);

//HOISTING Y CLASES (ejemplo al inico antes de declarar la clase)
    //Si queremos un objeto antes de declararlo esto no sera posible ya que en clases no aplica el concepto de hoisting.

//HERENCIA EN JS
    //Es una caracteristica muy importante en la POO, podemos usar este concepto para reutilizar codigo desde una clase padrea una clase hija.
    /* 
    Diagrama UML: www.umletino.com
        ┌══════════════════════┐
        |       Persona        |
        |══════════════════════|
        |   _nombre : string   |
        |  _apellido : string  |
        |══════════════════════|
        |    get nombre()      |
        |  set nombre(string)  |
        |   get apellido()     |
        | set apellido(string) |
        └══════════════════════┘
                  ^
                  | <<Extends>> 
        ┌════════════════════════┐
        |       Empleado         |
        |══════════════════════  |
        |_departamento : string  |
        |══════════════════════  |
        |  get departamento()    |
        |set departamento(string)|
        └════════════════════════┘
    */

        class Empleado extends Persona{
            constructor(nombre,apellido,departamento){
                super(nombre,apellido);
                this._departamento = departamento;
            }
            get departamento(){
                return this._departamento;
            }
            //Cuando se trabaja con clases ya no es necesario poner comas entre los metodos
            set departamento(departamento){
                this._departamento=departamento;
            }
            //Sobreescritura
            //Debe ser el mismo nombre de la clase padre
            nombreCompleto(){
                return super.nombreCompleto() +", "+ this._departamento;
            }
            
        }
        //debemos mandar a llamar al contructor de la clase padre para crear un objeto de la clase hija
        let empleadoUno = new Empleado("Carmelo","Sendero","Sistemas");
        console.log(empleadoUno);

//HEREDAR METODOS
        console.log(empleadoUno.nombreCompleto());

//SOBREESCRITURA EN JAVASCRIPT  
        // Desde la clase hija vamos a modificar el comportamiento definido en el comportamiento de la clase padre.

        //Ahora el output del console.log deberia de imprmimir CARMELO SENDER, SISTEMAS

//CLASE OBJECT, METODO TOSTRING SOBREESCRITURA Y POLIMORFISMO

    //Al crear una clase, si no se agrega el extends JS, automaticamente agrega un etends a la clase Object, que es la clase padre de todas las clases en JS
    //Esta contiene varios metodos
    //toString
    //Permite mandar los valores actuales de cada uno de los attributos de nuestro objeto.

    console.log(empleadoUno.toString())
    //Como podemos ver, al sobre escribir el metodo de tostring de la clase Persona aun asi nos imprime junto con el dpto, por lo que podemos deducir que esta tomandolo
    //de la clase hija, a esto se le conoce como polimorfismo. Si estuvieramos trabajando con una referencia a la clase padre, el toString funcionaria sin agregar el dpto
    //al momento de imprimir.