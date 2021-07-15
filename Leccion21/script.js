
    

    function suma(){
        let operandoA = parseInt(document.getElementById('operandoA').value);
        let operandoB = parseInt(document.getElementById('operandoB').value);
        console.log(typeof operandoA);
        if(operandoA == "" ||  operandoB == ""){
            console.log('Te falto poner un valor');
        }else{
            console.log(typeof operandoA);
             let resultado = operandoA + operandoB;
            document.getElementById('resultado').innerHTML ='Resultado: '+ resultado;
        }
    }