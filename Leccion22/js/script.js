
const personas = [
    new Persona('Juan','Almanza'),
    new Persona('Charles','Manson')
];


function mostrarPersonas(){
    console.log('Ejecutando mostrar personas....');
    let texto = '';
    for (let persona of personas){
        console.log(personas);
        console.log(persona);
       texto += `<li> ${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma= document.forms['forma'];
    const nombre= forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value !='' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas();
    }else{
        console.log('No information to add');
    }
    
}