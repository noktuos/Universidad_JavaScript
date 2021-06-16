let condicion = true;

if (condicion){
    console.log("condicion verdadera")
}else{
    console.log("condicion falsa")
}

let numero =1;

if(numero ==1){
    console.log("Numero uno");
}else if(numero==2){
    console.log("Numero dos");
}else if (numero ==3){
    console.log("Numero tres");
}else{
    console.log("Numero desconocido")
}

//Ejersicio estaciones del año
let monthNumber = 12;
if(monthNumber==1 || monthNumber==2 || monthNumber==12){
    console.log("Temporada invernal");
}else if(monthNumber==3 || monthNumber==4 || monthNumber==5){
    console.log("Temporada Primaveral");
}else if(monthNumber==6 || monthNumber==7 || monthNumber==8){
    console.log("Temporada Verano");
}else if(monthNumber==9 || monthNumber==10 || monthNumber==11){
    console.log("Temporada Otoño");
}else{
    console.log("Numero no correspondiente a una estacion")
}

//Estructura Switch

let num = 1;
let numeroTexto ="Valor desconocido";

switch(num){
    case 1:
        numeroTexto= 'Numero uno'
        break;
    case 2:
        numeroTexto= 'Numero dos'
        break;
    case 3:
        numeroTexto ='Numero tres'
        break;
}
console.log(numeroTexto)

//Comparacion estricta al usar switch
//La sentencia switch utiliza la comparacion estricta para los case, por lo que si queremos comparar 2 literales de diferente tipo no nos lo permitira.
let valorSwitch = "11";
switch(valorSwitch){

    case 11:
        console.log("Numero 11");
    default:
        console.log("Valor no valido");
}