//Algoritmo V
//1. Configura un array para que los valores negativos se transformen en 0. Por ejemplo, 
//resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].
function resetNegativos(x){
    for (var i=0; i<x.length; i++){
        if(x[i]<0){
            x[i]=0;
        }
    }
    return x;
}

a=resetNegativos([1,2,-1,-3]);
console.log(a);



//Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el 
//primer valor y dejando un 0 para el último valor. Por ejemplo, moverAdelante([1,2,3]) 
//debiera dar como resultado [2,3,0].
function moverAdelante(x){
    newarr=[]
    for (var i=1; i<x.length; i++){
            newarr.push(x[i]);
    }
    newarr.push(0);
    return newarr;
}
a=moverAdelante([1,2,3]);


console.log(a);
function moverAdelante(x){
    newarr=[]
    for (var i=1; i<x.length; i++){
            newarr.push(x[i]);
    }
    newarr.push(0);
    return newarr;
}
a=moverAdelante([1,2,3]);
console.log(a);

//Configura un array para que el resultado sean los valores en el orden contrario. Por ejemplo, 
//returnReverso([1,2,3]) debe dar [3,2,1].



//Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). 
//Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].