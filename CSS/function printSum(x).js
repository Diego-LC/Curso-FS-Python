function printSum(x) {
    var sum = 0;
    for (var i=0; i<=x; i++){ 
        sum=sum+i; 
        //console.log(i,sum);
    }
    return sum;
}
y = printSum(255);
console.log(y);


function printSumArray(x) {
    var sum = 0;
    for(var i=0; i<x.length; i++) {
    sum = sum + x[i];//your code here
    }
    return sum;
}
console.log( printSumArray([1,2,3]) ); // debería imprimir 6


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