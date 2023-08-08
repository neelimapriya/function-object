function add(num1, num2){
    console.log(num1,num2);
    var sum = num1+num2;
    return sum;
}

var total = add(34,56);
// console.log('total', total);

function bringShingara(money){
    var singaraPrice= 10;
    var quantity = money/ singaraPrice;
    return quantity;
}
var singaras = bringShingara(200);
console.log('eating singaras:')