const ingresos = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Pago Ramon',5000.00)
];

const egresos = [
    new Egreso('Deuda', 1000.00),
    new Egreso('Mandado',600.00)
];

let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let cargarCabecero = () =>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos()*100;
    var formatter = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD',
        minimumFractionDigits:2
    });
    
    porcentajeEgreso = porcentajeEgreso.toFixed(2);
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = `${porcentajeEgreso}%`;
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
}   

let formatoMoneda = (valor) => {
    var formatter = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD',
        minimumFractionDigits:2
    });
    return formatter.format(valor);
}

let totalIngresos = () => {
    let totalIngreso=0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    console.log(totalIngreso);
    return totalIngreso;
    
}

let totalEgresos = () =>{
    let totalEgreso=0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    console.log(totalEgreso);
    return totalEgreso;
}

const cargarIngresos = () => {
    let ingresosHTML = '';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
       
    }
    
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML= `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-outline"
                onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
            </button>
        </div>
    </div>
</div>`;
return ingresoHTML;
}

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(ingreso =>ingreso.id === id);
    ingresos.splice(indiceEliminar,1);
    cargarCabecero();
    cargarIngresos();
    //for(let ingreso of ingresos){
}

const cargarEgresos = () => {
    let egresosHTML='';
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);

    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) => {
    let egresoHTML  = `
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${egreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-outline"
                                onclick="eliminarEgreso(${egreso.id})"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    `;
    return egresoHTML;
}

const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar,1);
    cargarCabecero();
    cargarEgresos();
}

const formatoPorcentaje = (valor) => {
    valor = valor*100;
    valor = valor.toFixed(2)+"%";
    return valor;
}

const agregarDato = () => {
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];
    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarIngresos();
        }else if( tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }

    }

}