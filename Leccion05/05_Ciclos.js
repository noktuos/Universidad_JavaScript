let numero = 1;
//Ciclo while
while(numero <= 4){
    console.log(numero);
    numero++
}
//Ciclo do while
do{
    //console.log("cuenta en: "+numero);
    numero++
} while (numero<100);

//Ciclo for

for(x=0;x<=5;x++){
    console.log(x);
}

// Uso de la palabra break en la ejecucion de los ciclos
//Se utiliza para romper un ciclo

for(x=0;x<=10;x++){
    if(x % 2==0 && x!=0){
        console.log("Numero par: "+x);
        break;
    }
}

//Uso de la palabra continue en JavaScript
//continue hace que la iteracion existente en ese momento se detenga y se pase a la siguiente iteracion, ahorrando ejecutar codigo no necesario y terminar el ciclo de manera mas rapida
for(x=0;x<=10;x++){
    if(x % 2==0 && x!=0){
        console.log("Numero par: "+x);
        continue;
    }
}

//Uso de labels / etiquetas en JavaScript
inicio:
for(x=0;x<=10;x++){
    if(x % 2==0 && x!=0){
        console.log("Numero par: "+x);
        continue inicio;
    }
}
