const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let sec = formatoHora(fecha.getSeconds());
    var dd = fecha.getDay();
    var mm = String(fecha.getMonth() + 1).padStart(2, '0');
    var yyyy = fecha.getFullYear();

    fecha = mm + '/' + dd + '/' + yyyy;
    
    document.getElementById('hora').innerHTML = `${hr}:${min}:${sec}`;
    document.getElementById('fecha').innerHTML = `${fecha}`;
}

const formatoHora = (hora) =>{
    if(hora < 10)
        hora = '0'+hora;
    return hora;
    
}

setInterval(mostrarReloj,1000);