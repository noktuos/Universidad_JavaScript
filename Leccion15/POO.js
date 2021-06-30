//Concepto de sobre escritura en JS
class Empleado{
    constructor(nombre,sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo=sueldo;
    }
    obtenerDetalles(){
        return `El empleado ${this._nombre} tiene un sueldo de $${this._sueldo}`;
    } 
}

class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this._departamento=departamento;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo=sueldo;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento=departamento;
    }
    obtenerDetalles(){
        return `El gerente ${this._nombre} del dpto ${this._departamento} gana un sueldo de ${this._sueldo}`;
        //Otro modo de hacerlo seria ` Gerente ${super.obtenerDetalles()} del dpto ${this._departamento}`
        //De este modo usariamos directamente el metodo de la clase padre
    }
}


//POLIMORFISMO 
//Creamos un tipo de modo generico y este acceder a los diferentes metodos de las clases
function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo Empleado');
    }
    else if(tipo instanceof Object){
        console.log('Es un objeto de tipo Object');
    }
}

let empleado1 = new Empleado('Carmelo',12000);
let gerente1 = new Gerente('Joaquin',50000,'Calidad');


determinarTipo(empleado1);
determinarTipo(gerente1);

//Palabra instanceOf
//Al preguntar esto nos da de resultado si es una instancia de cierta clase, al preguntar si es instancia de la clase empleado, tanto la clase Empleado como la clase Gerente
//daran positivo, ya que gerente es hija de la clase Empleado
//Si se pregunta por la clase Gerente unicamente la clase gerente sera impresa como correcta a clases del mismo tipo o clases padre, la cual en este caso no corresponde a Empleado
// El resultado del objeto Empleado arroja unicamente que es un objeto Empleado, sin embargo el objeto Gerente Arroja positivo en instanceof Empleado y Gerente
//La clase object saldria positiva en ambos casos, ya que Object es la clase padre de todas las clases.