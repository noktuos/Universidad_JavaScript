
//Accediendo a valores de manera general de un form con js
function mostrarValores(){

    let formulario = document.forms['formulario']
    let texto='';
    //Acceder de manera individual a los valores del formulario
    let nombre = formulario['nombre'];
    let apellido = formulario['apellido'];
    texto = nombre.value + '<br>' + apellido.value;
    for(let elemento of formulario){
        //texto += elemento.value + '<br/>'
    }
    document.getElementById('valores').innerHTML = texto;
}

