//  Ejersicio para poner en practica las lecciones de clases

//Diagrama uml para el ejersicio
/* 
    Diagrama UML: www.umletino.com
                                ┌══════════════════════┐
                                |       Persona        |
                                |══════════════════════|
                                    _idPersona : number
                                |   _nombre : string   |
                                |  _apellido : string  |
                                     _edad : number
                                |══════════════════════|
                                |get idPersona():number|
                                |    get nombre()      |
                                |  set nombre(string)  |
                                |   get apellido()     |
                                | set apellido(string) |
                                  get edad(): number
                                  set edad(string)
                                  toString()
                                └══════════════════════┘
                  ---------------------^       ^---------------------
                  | <<Extends>>                        <<Extends>>  |
        ┌════════════════════════┐                       ┌════════════════════════┐                              
        |       Empleado         |                       |        Cliente         |
        |══════════════════════  |                       |══════════════════════  |
        |  _idEmpleado : string  |                       |_idCliente  :  string   |
        ||   _sueldo : string    |                       |_fechaRegistro : string |
        |════════════════════════|                       |════════════════════════|
        | getIdEmpleado():number |                       |      getIdCliente      |
        |   getSueldo:number     |                       |getFechaRegistro(Date)  |
        |    setSueldo(number)   |                       |setFechaRegistro(Date)  |
        |    toString()          |                       |       toString()       |
        └════════════════════════┘                       └════════════════════════┘
    */    
        class Persona{
          static contadorPersonas=0;
          constructor(nombre,apellido,edad){
              this._idPesona = ++Persona.contadorPersonas;
              this._nombre=nombre;
              this._apellido=apellido;
              this._edad = edad;
          }
          get idPersona(){
              return this._idPersona;
          }
          get nombre(){
              return this._nombre;
          }
          set nombre(nombre){this._nombre=nombre;}
          get apellido(){return this._apellido}
          set apellido (apellido){this._apellido = apellido;}
          get edad(){
              return this._edad;
          }
          set edad (edad){ this._edad=edad;}
          toString(){
              return this._idPesona +" "+this._nombre+" "+this._apellido+ " "+ this._edad;
          }
      }
        class Empleado extends Persona{
          static contadorEmpleados=0;
          constructor(nombre,apellido,edad,sueldo){
            super(nombre,apellido,edad);
              this._idEmpleado = ++Empleado.contadorEmpleados;
              this._sueldo = sueldo;
          }
          get idEmpleado(){
              return this._idEmpleado;
          }
          get sueldo(){
              return this._sueldo;
          }
          set sueldo(sueldo){
              this._sueldo=sueldo;
          }
          toString(){
              return super.toString()+ " "+ this._idEmpleado + " " + this._sueldo;
          }
      }
        class Cliente extends Persona{
          static contadorClientes=0;
          constructor(nombre,apellido,edad,fechaRegistro){
            super(nombre,apellido,edad);
              this._idCliente = ++Cliente.contadorClientes;
              this._fechaRegistro = fechaRegistro;
          }
          get idCliente(){
              return this._idCliente;
          }
          get fechaRegistro(){
              return this._fechaRegistro;
          }
          set fechaRegistro(fechaRegsitro){
              this._fechaRegistro = fechaRegsitro;
          }
          toString(){
              return super.toString() + " " + this._idCliente + " "+ this._fechaRegistro;
          }
      }

      //Prueba de clase Persona
      let persona1 = new Persona('Juan','Estopellan',28);
      console.log(persona1.toString());
      let persona2 = new Persona('Ramiro','Gutierrez',21);
      console.log(persona2.toString());

      //Prueba de la clase Empleado
      let empleado1 = new Empleado('Anaiza','Araiza',28,30000);
      console.log(empleado1.toString());

      //Prueba de la clase Cliente
      let cliente1 = new Cliente('laura','Estrada',99,'2021-01-01');
      console.log(cliente1.toString());