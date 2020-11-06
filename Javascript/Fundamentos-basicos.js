/*1. Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255. */

function num(){
    arrnum=[];
    for(var i=1; i<=255; i++){
        arrnum.push(i);
    }
    return arrnum;
}
a=num();
console.log(a);



/*2. Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los 
números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio.  */

function SumPares(){
    sum=0
    for(var i=0; i<=1000; i+=2){
        sum=sum+i;
    }
    console.log(sum);
}
a=SumPares();



/*3.Suma impares hasta 5000: Escribe una función que devuelva la suma de todos 
los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).*/

function SumImpar(){
    sum=0;
    for(var i=1; i<5000; i+=2){
        sum=sum+i;
    }
    return sum;
}
a=SumImpar();
console.log(a);




/*4.Itera un array: Escribe una función que devuelva la suma de todos los valores 
dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14).*/ 

function SumArr(x){
    if(x.length>=1){
        sum=0;
        for (var i=0; i<x.length; i++){
            sum=sum+x[i];
        }
        return sum;
    }
    return x;
}
a=SumArr([1,2,3,4,5,6,7,8]);
console.log(a);



/*5. Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función 
que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7).  */

function mayor(x){
    if(x.length>=1){
        max=x[0];
        for (var i=0; i<x.length; i++){
            if(max < x[i]){
                max=x[i]
            }
        }
        return max;
    }
    return x;
}
a=mayor([0,4,1,8,3,6,5,9,2,4,-6]);//mayor=9
console.log(a);

/*6. Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función 
que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2). */

function avg(x){
    if(x.length >= 1){
        sum=0
        for (var i=0; i<x.length; i++){
            sum=sum+x[i];
        }
        return sum/x.length
    }
    return x
}
a=avg([1,3,5,7,20]);//avg=7.2
console.log(a);

/*7. Array de impares: Escribe una función que devuelva un array de todos los números 
impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’. */

function impares(){
    impares=[];
    for (var i=1; i<50; i+=2){
        impares.push(i);
    }
    return impares;
}
a=impares();
console.log(a);




/*8. Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los 
valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 
(hay 2 números en el array mayores que 3, esto son 5 y 7).  */

function mayores(x,y){
    if(x.length>=1 && y!=undefined){
        arr=[];
        for (var i=0; i<x.length; i++){
            if(x[i]>y){
                arr.push(x[i]);
            }
        }
        return arr;
    }
    return "revisar valores";
}
a=mayores([1,3,5,7],9);
console.log(a);




/*9. Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace 
cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]). */

function cuad(x){
    if(x.length>=1){
        for (var i=0; i<x.length; i++){
            x[i]=x[i]**2
        }
        return x;
    }
    return "esto está vacio.."
}
a=cuad([]);
console.log(a);




/*10. Negativos: Dado un array con múltiples valores, escribe una función que reemplace 
cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array 
no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]). */

function sinNegativo(x){
    if (x.length>0){
        for (var i=0; i<x.length; i++){
            if(x[i]<0){
                x[i]=0;
            }
        }
        return x;
    }
    return "está tan vacio..."
}
console.log(sinNegativo([]));


/*11. Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva 
un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del 
array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]). */

function maxMinAvg(x){
    if(x.length>0){
        avg=[];
        max=x[0];
        min=x[0];
        sum=x[0]
        for (var i=1; i<x.length; i++){
            sum=sum+x[i]
            if(x[i] > max){
                max=x[i];
            }
            if(x[i] < min){
                min=x[i];
            }
        }
        avg.push(max,min,sum/x.length);
        return avg;
    }
    return "tan vacío..."
}
console.log(maxMinAvg([1,5,10,-2,8,1,35,21,7]));

/*12. Intercambia Valores: Escribe una función que intercambie el primer y el último valor 
de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]).  */

function swaparr(x){
    inicio=x[0];
    final=x[x.length];
    x[x.length]=inicio;
    x[0]=final;
    return x;
}
console.log(swaparr([1,5,10,-2]))


/*13. De Número a String: Escribe una función que tome un array de números y reemplace 
cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], 
tu función devolverá [‘Dojo’,‘Dojo’,2]. */

function sinNegativos(x){
    if(x.length>0){
        for (var i=0; i<x.length; i++){
            if(x[i] < 0){
                x[i]="Dojo";
            }
        }
        return x;
    }
    return "si está vacio no funciona esto"
}
console.log(sinNegativos([-1,-3,2]));