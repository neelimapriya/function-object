var shoppingCart={
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25
}
// when you know the specific property name,use dot notation to get the property value
var penCount = shoppingCart.pen;
// alternative system
// when you know the specific property name, use dot notation to get the property value
var penCount2 = shoppingCart['pen'];
var propertyName ='books'
var propertyValue= shoppingCart[propertyName]
console.log(propertyName, propertyValue)


console.log(shoppingCart)

// set property values system 1

shoppingCart.mouse=25;
console.log(shoppingCart);

// system 2
shoppingCart['mouse']=29;
console.log(shoppingCart);
// system 3  
shoppingCart[propertyName]=89;
console.log(shoppingCart)
