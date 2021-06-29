//Proyecto de Mundo PC

class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca=marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca=marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones=0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return ` ${this._marca} ${this._tipoEntrada} y su id es: ${this._idRaton}`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados=0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return ` ${this._marca} ${this._tipoEntrada} y su id es: ${this._idTeclado}`;
    }
}

class Monitor{
    static contadorMonitores=0;
    constructor(marca,tamano){
        this._marca=marca;
        this._tamano = tamano;
        this._idMonitor = ++Monitor.contadorMonitores;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca=marca;
    }
    get tamano(){
        return this._tamano;
    }
    set tamano(tamano){
        this._tamano=tamano;
    }
    toString(){
        return `Id:${this._idMonitor} Marca: ${this._marca} Dimensiones:${this._tamano} `;
    }
}

class Computadora{
    static contadorComputadoras=0;
    constructor(nombre,monitor,teclado,raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor  = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    toString(){
        return `La computadora: ${this._idComputadora} con el nombre: ${this._nombre} tiene de perifericos: \n Monitor: ${this._monitor} \n Mouse: ${this._raton} \n Teclado ${this._teclado}`
    }
}

class Orden{
    static contadorOrdenes=0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden ='';
        	for(let computadora of this._computadoras){
                computadorasOrden += '\n{'+computadora.toString()+'}';
            }
            console.log(`Orden id: ${this._idOrden} Productos: ${computadorasOrden} `);
            return computadorasOrden;
    }
    
}

let raton1 = new Raton('Usb','Logitech');
//console.log(raton1.toString());
let teclado1 = new Teclado('Usb','Cooler Master');
let teclado2 = new Teclado('Usb','Razer');
//console.log(teclado1.toString());
let monitor1 = new Monitor('Zowie','24\'');
//console.log(monitor1.toString());

let computadora1 = new Computadora('Noktuos Desktop',monitor1,teclado2,raton1);
let computadora2 = new Computadora ('Dz desktop',monitor1,teclado1,raton1);
//console.log(computadora1.toString());

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();
