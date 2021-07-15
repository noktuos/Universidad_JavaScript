console.log("Saludos desde javascript");
let cabecero = document.getElementById("cabecero");
let parrafo = document.getElementById('parrafo');
console.log('El valor del cabecero es: '+cabecero.innerHTML);
//Si deseamos cambiar su texto
cabecero.innerHTML='Alguien enveneno el abrevadero';
//Metodo getElementByTagName
let parrafos = document.getElementsByTagName('p');
console.log('No de parrafos'+parrafos);
for(let parrafo of parrafos){
    console.log('El parrafo dice: '+parrafo.innerHTML)
}
//Metodo getElementByClassName
let elementosClass = document.getElementsByClassName('azul');
for(let elemento of elementosClass){
    console.log('El elemento Class dice: '+elemento.innerHTML)
}

//Metodo querySelectorAll
let elementosQuery = document.querySelectorAll('p.azul');
for(let elementoQuery of elementosQuery){
    console.log('El elementoQuery  dice: '+elementoQuery.innerHTML)
}
