/*Predichas correctamente: 15/15
*/
//rspt:>> respuesta predictiva
//ouput:>> resultado real de consola

// 1.

function a(){   //a=''  //a=35
    return 35;  //a=35
}
console.log(a());//-->'35'
//rspt: 35
//output: 35


//2.
function a(){   //1/a=''  //1/a=4   //2/a=''    //2/a=4
    return 4;   //1/a=4             //2/a=4
}
console.log(a()+a());//(4+a()) //(4+4) -->'8'
//rspt:8
//ouput:8


//3.
function a(b){  //b=2   //b=4
    return b;   //a=2   //a=4
}
console.log(a(2)+a(4));//(2+a(4))   //(2+4) -->'6'
//rspt:6
//ouput:6


//4.
function a(b){      //b=3      //a=9
    console.log(b); //-->'3'
    return b*3;     //a=3*3 => a=9
}
console.log(a(3));  //(9)-->'9'
//rspt:3,9
//ouput:3,9


//5.
function a(b){      //b=10          //a=40
    return b*4;     //a=b*4 =>40
    console.log(b); //
}
console.log(a(10)); //-->'40'
//rspt:40
//ouput:40


//6.
function a(b){      //b=15       
    if(b<10) {      //15<10=>false
        return 2;   //
    }               //
    else     {      //
        return 4;   //b=4 => a=4
    }
    console.log(b); //
}
console.log(a(15)); //-->'4'
//rspt:4
//rspt:4



//7.
function a(b,c){        //a(3,10)=> b=3 c=10
    return b*c;         //b=3*10 => a(30) 
}
console.log(10,3);      //'10,3'
console.log( a(3,10) );//-->'30'
//rspt:10,3,30
//ouput:10,3,30


//8.
function a(b){                  //
    for(var i=0; i<10; i++){    //
        console.log(i);         //
    }                           //
    return i;                   //
}                               //
console.log(3); //-->'3'
console.log(4); //-->'4'
//rspt:3,4
//ouput:3,4

//9.
function a(){                   //''        //''        //''        //''        //''
    for(var i=0; i<10; i++){    //0<10 true //3<10 true //6<10 true //9<10 true //12<10 false
        i = i +2;               //0+2;      //3+2;      //6+2;      //9+2       //
        console.log(i);         //-->'2'    //-->'5'    //-->'8'    //-->'11'   //
    }                           //i++ = 3   //i++ = 6   //i++ = 9   //i++ = 12  // 
}                                                                               //
a();//''
//rspt:2,5,8,11
//ouput:2,5,8,11


//10.
function a(b,c){                //b=0 c=10 
    for(var i=b; i<c; i++) {    //0<10 true //1<10 true //2<10 true //3<10 true ...  //9<10 true //10<10 false
        console.log(i);         //-->'0'    //--'1'     //-->'2'    //-->'3'    ...  //-->'9'    //
    }                           //i++ =1    //i++ =2    //i++ =3    //i++ =4    ...  //i++ =10   //
    return b*c;                                                                                  //0*10 = a=0
}
a(0,10);                        //a=0
console.log(a(0,10));                  // --> '0'
//rspt:0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0
//ouput:0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0



//11.
function a(){                       //no hay llamado a la función
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(j);
        }
        console.log(i);
    }
}
//rspt:' '
//ouput:' '



//12.
function a(){                       //no hay llamado a la función
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
//rspt:' '
//ouput:' '



//13.
var z = 10;
function a(){                   //no hay llamado a la función
    var z = 15;
    console.log(z);
}
console.log(z);     //-->'10'
//rspt:10
//ouput:10



//14.
var z = 10;         //z=10
function a(){       //''
    var z = 15;     //z=15
    console.log(z); //-->'15'
}                   //z=10
a();
console.log(z);//-->10
//rspt:15,10
//ouput:15,10



//15.
var z = 10;         //z=10
function a(){       //a=''
    var z = 15;     //z=15
    console.log(z); //-->'15'
    return z;       //z=15 = a=15
}                   
z = a();        //z=15
console.log(z); //-->'15'
//rspt:15,15
//ouput:15,15