// let miPromesa = new Promise((resolved,rejected) =>{ 
//     let expresion = false;
//     if(expresion){
//         resolved('Resolvio correcto');
//     }else{
//         rejected('Rechazado');
//     }
// });

//Manera 1

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error));

//Manera 2

// miPromesa
// .then(valor => console.log(valor))
// .catch(error => console.log(error));

//Funcion setTimeout y Promesas en JavaScript

let promesa = new Promise((resolved) =>{
    //console.log("Inicio Promesa");
    setTimeout( ()=> resolved('Saludos con promesas y timeout',3000));
    //console.log('fin promesa');
});

// promesa.then(valor => console.log(valor));

//Palabras Async 
//Al poner async antes de una funcion significa que esta obligado a regresar una promesa

async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';

}

//miFuncionConPromesa().then(valor => console.log(valor));


//Palabra reservada await y async
//Espera el resultado de una promesa

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await =D');
    });
    //await solo se puede usar dentro de una funcion declarada con async
  //  console.log( await miPromesa);
}

//funcionConPromesaYAwait();

//promesas con await async y setTimeout

async function funcionConAwaitYSetTimeout(){
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('Promesa con await y timeout'),3000);

    });
    console.log(await miPromesa);
}

funcionConAwaitYSetTimeout();
