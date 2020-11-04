/** 1 **/
function a(x,y){
    return 5;
}
console.log(a(5,5)); //función devuelve 5
//Rspt:5


/** 2 **/
function a(x,y){    //x=2,y=2   //x=6,y=8
    z = [];
    z.push(x);      //[2]       //[6]
    z.push(y);      //[2,2]     //[6,8]
    z.push(5);      //[2,2,5]   //[6,8,5]
    console.log(z); //'[2,2,5]' //'[6,8,5]'
    return z;       //a=[2,2,5] //a=[6,8,5]
}
b = a(2,2);         //b=[2,2,5]
console.log(b);     //'[2,2,5]'
console.log(a(6,8));//'[6,8,5]'
//Rspt:'[2,2,5]','[2,2,5]','[6,8,5]','[6,8,5]'


/** 3 **/
function a(x){  //x=2
    z = [];     
    z.push(x);  //[2]
    z.pop();    //[]
    z.push(x);  //[2]
    z.push(x);  //[2,2]
    return z;   //a=[2,2]
}
y = a(2);       //y=[2,2]
y.push(5);      //y=[2,2,5]
console.log(y);//'[2,2,5]'
//Rspt:'[2,2,5]'


/** 4 **/
function a(x){          //x=[2,3,4,5]
    if(x[0] < x[1]) {   //if(2 < 3) --> true
        return true;    //a=true
    }
    else {              
        return false;
    }
}
b = a([2,3,4,5]);       //b = true
console.log(b);         //'true'
//Rspt: 'true'


/** 5 **/
function a(x){                     //x=[1,2,3,4]
    for(var i=0; i<x.length; i++){ // 0<4->true    //1<4->true             //2<4->true                    //3<4->true                   //4<4->false 
        if(x[i] > 0){              //if(1>0)->true //if(2>0)->true         //if(3>0)->true                //if(4>0)->true
            x[i] = "Coding";//x=[coding,2,3,4]     //x=[coding,coding,3,4] //x=[coding,coding,coding,4]   //x=[coding,coding,coding,coding]
        }                           //i++=1        //i=2                   //i=3                          //i=4
    }
    return x;                   //x=[coding,coding,coding,coding]->a
}
console.log(a([1,2,3,4]))       //'[coding,coding,coding,coding]'
//Rpst:'[coding,coding,coding,coding]'


/** 6 **/
function a(x){                      //x=[5,7,-1,4]      //x=[5,7,-1,4]      //x=[5,"coding",-1,4]   //x=[5,"coding","dojo",4]
    for(var i=0; i<x.length; i++){  //0<4 ->true        //1<4 ->true        //2<4 ->true            //3<4 -true             //4<4 -false 
        if(x[i] > 5){               //if(x[0]>5)->false //if(x[1]>5)->true  //if(x[2]>5)->false     //if(x[3]>5)->false
            x[i] = "Coding";        //                  //x[1]="coding"     //                      //
        }                           //                  //                  //                      //
        else if(x[i] < 0){          //if(x[0]<0)->false //                  //if(x[2]<0)->true      //if(x[3]<0)->false
            x[i] = "Dojo";          //                  //                  //x[2]="Dojo"           //
        }                           //i=1               //i=2               //i=3                   //i=4
    }
    return x; //x=[5,"coding","dojo",4]
}
console.log(a([5,7,-1,4])) //'[5,"coding","dojo",4]'
//Rspt:'[5,"coding","dojo",4]'


/** 7 **/
function a(x){          //x=[5,10]
    if(x[0] > x[1]) {   //if(5>10)->false
        return x[1];    //
    }                   //
    return 10;          //x=10
}                       //a=10
b = a([5,10]);  //b=10
console.log(b); //'10'
//Rspt:'10'


/** 8 **/
function sum(x){
    sum = 0;
    for(var i=0; i<x.length; i++){
        sum = sum + x[i];
        console.log(sum);
    }
    return sum;
}
//Rspt:''



/**Parte 2**/
//1) Analiza los valores de un array y obtén el promedio (average) de esos valores:

function printAverage(x){
    sum = 0;
    for (var i=0; i<x.length; i++){// your code here
        sum = sum + x[i];
    }
    return sum/x.length;
}
y = printAverage([1,2,3]);
console.log(y); // should log 2

y = printAverage([2,5,8]);
console.log(y); // should log 5



//2) Crea un array con todos los enteros impares (odd integers) entre 1 y 255 (inclusive)

function returnOddArray(){
    odd = [];
    for (var i=1; i<=255; i++){// your code here
        if (i % 2 == 1){
        odd.push(i); 
        }
    }
    return odd;
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]



//3) Cuadra cada valor con un array dado, obteniendo el mismo array con valores cambiados..

function squareValue(x){
    for (var i=0; i<x.length; i++){// your code here
        x[i] = x[i] * x[i];
    }
    return x;
}
y = squareValue([1,2,3]);
console.log(y); // should log [1,4,9]

y = squareValue([2,5,8]);
console.log(y); // should log [4,25,64]