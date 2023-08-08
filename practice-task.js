// number 1
// write a function called foo() which prints 'foo' and a function  called bar() which prints 'bar' . call function bar in the foo() function after printing.what will be the output? Now call the foo() to see the output.
function bar(){   
    console.log('bar');
}
function foo(){  
    console.log('foo');
    bar();

   
}
 foo();







//2. write a function called make_avg() which will take an three integers and return the average of those values.

function make_avg(a,b,c){
   var sum=a+b+c;
   var average=sum/3;
    return average;
}

console.log('average number', make_avg(2,3,4));




// 3. write a function called make_avg() which will take an array of integers and the size of the array and return the average of those values.

function array_avg(array,size){
let sum=0;
for (let i=0; i<size; i++){
    sum += array[i];
}
return sum/size;
}
const array=[2,4,6,8,9];
console.log(array_avg(array,array.length));




// 4.write a function called odd_even() which takes an integer value and tells whether this value is even or odd.you need to do it in 4 ways:
// .has return + has parameter
// .no return + has parameter

function odd_even(){
    if(number % 2 === 0){
       console.log('number is even'); 
    }
    else{
        console.log('number is odd');
    }
}
const number=23;
odd_even();




//5. you are in a hurry to go to your school on time. But when you are crossing the road,the traffic signal is red coloured.In this situation,if you try to cross the road,you may be in danger.if you notice a yellow colored traffic signal, you should stop.if you notice a green coloured traffic signal, you should cross the road. so write a js code ,where there is variable called signal. its value can be green,yellow or red.& we will get different activities as output depending on the variable.
const signal='red';
if(signal=== 'red'){
    console.log('you may be in danger.')
}
else if(signal==='yellow'){
    console.log(' you should stop')
}
else if(signal==='green'){
    console.log('you should cross the road')
}

//  switch method

switch(signal){
    case 'red':
        console.log('you may be in danger.')
        break;
    case 'yellow':
        console.log('you should stop')
        break;
    case 'green':
        console.log('you should cross the road')
        break;
    
            
   
}
