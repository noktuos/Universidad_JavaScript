//Uso de setInterval
//Esta manda llamar a las funciones cada cierto tiempo

let reloj = () => {
     let fecha = new Date();
     console.clear();
     console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
     console.clear();
}


setInterval(reloj,1000);