function a() {
    console.log('hello');
}
console.log('Dojo');
//rspt:'Dojo'

/** 2 las funciones pueden o no retornar valor*/
function a() {
    console.log('hello');
    return 15;
}
x = a(); //x = 15
console.log('x is', x);
//rspt:'hello','x is 15'

/** */
function a(n) { //n=3
    console.log('n is', n);
    return n + 15; //18
}
x = a(3); //x = 18
console.log('x is', x);

//rspt:'n is 3','x is 18'

/** */
function a(n) { //n=5
    console.log('n is', n);
    y = n * 2; //10
    return y; //return 10
}
x = a(3) + a(5); //x = 6 + 10 > x= 16
console.log('x is', x);
//rspt:'n is 3','n is 5','x is 16'


/** *  5 */
function op(a, b) { //a=3;b=5
    c = a + b; //c = 8
    console.log('c is', c);
    return c; //return 8
}
x = op(2, 3) + op(3, 5); //x= 5 + 8 > x  = 13
console.log('x is', x);
//rspt: 'c is 5','c is 8','x is 13'


/** 6*/
function op(a, b) { //a=; b= 
    c = a + b; //c = 
    console.log('c is', c);
    return c; // return 
}
x = op(2, 3) + op(3, op(2, 1)) + op(op(2, 1), op(2, 3));
//x= 5+ op(3, 3)+ op(op(2, 1), op(2, 3))
//x= 5 + 6 + op(3,5) 
//x= 5+6+8 >19 ; x= 19
console.log('x is', x);
//rspt: 'c is 5','c is 3','c is 6','c is 3','c is 5','c is 8','x is 19'

/** * 7 */
var x = 15;

function a() {
    // nace y muere dentro de la funcion, distinta de la ota variable llamada x
    var x = 10;
}
console.log(x);
a(); //solamente llamando a la funcion
console.log(x);
//rspt: 15,15


/** * 8 */
function multiply(x, y) { //x= 2, y =3
    console.log(x);
    console.log(y);
}
b = multiply(2, 3); //b= undefined
console.log(b);
//rpst: 2,3, undefined


/** * 9 */
function multiply(x, y) { //x=5,y=2
    return x * y; //return 5*2
}
b = multiply(2, 3); //b= 6
console.log(b);
console.log(multiply(5, 2)); //console.log(10) > 10
//rspt: 6,10



/** * 10 */
//arreglo: conjunto de datos ordenado , segun su ingreso, separdos por coma (,)
//el tamaño del arreglo de obtiene,por cantidad de datos, o nombre_del_arreglo.length
//ejemplo  x.length = 6
//todos los arreglos comienzan por el indice cero(0)
//ejemplo x[0]=> 1;x[3]=> 4; x[5]=>10
//el ultimo elemento de la lista = x.length-1 //6-1 = 5
// x[x.length -1] => 10
var x = [1, 2, 3, 4, 5, 10]; //x= []
for (var i = 0; i < 5; i++) { //i=0>3>4>7>8 ;    i = i+1 > i+=1 >i++
    i = i + 3; //
    console.log(i);
}
//rspt:3,7



/** * 11 */
var x = 15; //creacion de una variable
console.log(x); //imprimiendo el contenido de x

function awesome() {
    var x = 10; //creacion de variable 
    console.log(x); //imprimiendo el contenido de x
}
console.log(x);
awesome();
console.log(x);
//rspt:15,15, 10,15


/**
 * 12*/
for (var i = 0; i < 15; i += 2) { //i=0>2>4>6>8>10>12>14>16    ; i = i+2  
    console.log(i);
}
//rspt:0,2,4,6,8,10,12,14


/** * 13*/
for (var i = 0; i < 3; i++) { //i=0>1>2>3

    for (var j = 0; j < 2; j++) { //j=0>1>2
        console.log(i * j);
    }

}
//rpst:0,0,0,1,0,2

/**
 * 14
 */
function looping(x, y) { //x=3; y=3
    for (var i = 0; i < x; i++) { //i=0>1>2>3

        for (var j = 0; j < x; j++) { //j=0>1>2>3
            console.log(i * j);
        }
    }
}
z = looping(3, 3); //z= undefined
console.log(z); //undefined
//rspt:0,0,0,0,1,2,0,2,4,undefined

/**
 * 15
 */
function looping(x, y) { // x= 3; y= 5
    for (var i = 0; i < x; i++) { //i=0>1>2>3

        for (var j = 0; j < y; j++) { //j=0>1>2>3>4>5
            console.log(i * j);
        }
    }
    return x * y;
}

z = looping(3, 5);
console.log(z);
//rspt:0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15


/**Parte 2 */
/**------Print 1 to x---------- */

function printUpTo(x) {
    // your code here
    if (x<0) {
        return "false";
    }
    else {
        for (var i=0; i<=x; i++){
            console.log(i);
        }
    }
}
printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
y = printUpTo(-10); // debería imprimir false
console.log(y); // debería imprimir false




//2.Completa el código a continuación para que la función entregue la suma de todos los valores en un array dado.

function printSumArray(x) {
    var sum = 0;
    for(var i=0; i<x.length; i++) {
        sum = sum + x[i]; //your code here
    }
    return sum;
}
console.log( printSumArray([1,2,3]) ); // debería imprimir 6



//Bonus----Crea una función que entregue el elemento más grande (largest element) en un array. 
//Por ejemplo largestElement([1,30,5,7]) debiera dar como resultado 30.
function largest(x){
    var a=x[0];
    for (var i=1; i<x.length; i++){
        if (x[i]>a){
            a=x[i];
        }
    }
    return a;
}
console.log(largest([1,5,3,6,8,20,4]));


