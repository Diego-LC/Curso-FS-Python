// Algoritmo IV

//1. Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y:

function arr(x,y){
    count = [];
    for (var i=0; i<x.length; i++){
        if (x[i]>y){
            count.push(x[i]);
        }
    }
    arr = [count.length,count];
    return arr;
}
b = arr([2,4,5,6,7],4);
console.log(b);



//2. Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array:

function arr(x){
    max=x[0];
    min=x[0];
    prom=x[0];
    for(var i=1; i<x.length; i++){
        if(x[i]>max){
            max=x[i];
        }
        if(x[i]<min){
            min=x[i];
        }
        prom=prom + x[i];
    }
    prom=prom/x.length;
    console.log(max,min,avg);
}
arr([2,8,4,5,9,1]);




//3. Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores 
//negativos se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) 
//debiera devolver [1,2, “Dojo”, “Dojo”, 5].

function reemplazarNegativos(x){
    arreglo = [];
    for(var i=0; i<x.length; i++){
        if (x[i]<0){
            arreglo.push("dojo");
        }
        else{
            arreglo.push(x[i]);
        }
    }
    return arreglo;
}
a=reemplazarNegativos([1,2,-3,-5,5]);
console.log(a);



//4.Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). 
//Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].


function removerRango(x,y,z){       
    arrnew=[];
    for(var i=0; i<x.length; i++){   
        if(i<y){
            arrnew.push(x[i]);
        } 
        if(i>z){
            arrnew.push(x[i]);
        }
    }
    return arrnew;
}
a=removerRango([20,30,40,50,60,70],2,4);
console.log(a);



function removerRango(x, RangIni, RangFin) {
    if (RangIni <= RangFin && RangFin >= 0 && RangIni >= 0 && RangIni <= x.length && RangFin < x.length) {
        let newarray = [];
        for (i = 0; i < x.length; i++) {
            if (i < RangIni || i > RangFin) {
                newarray.push(x[i]);
            }
        }
        return newarray;
    } 
    else {
        return "Revisar datos";
    }
}

g = removerRango([20, 30, 40, 50, 60, 70], 2, 4);
console.log(g);