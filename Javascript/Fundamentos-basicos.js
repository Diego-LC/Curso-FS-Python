//Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
function num(){
    arrnum=[];
    for(var i=1; i<=255; i++){
        arrnum.push(i);
    }
    return arrnum;
}
a=num();
console.log(a);



//Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los 
//números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 

function SumPares(){
    sum=0
    for(var i=0; i<=1000; i+=2){
        sum=sum+i;
    }
    console.log(sum);
}
a=SumPares();



/*Itera un array: Escribe una función que devuelva la suma de todos los valores 
dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14).*/ 