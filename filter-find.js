const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(n => n < 20);
// console.log('SM: ' + smallNumbers);
// console.log("BG: " + bigNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 20, color: 'pink' },
    { name: 'water glass', price: 100, color: 'white' },

]

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);

const yellow = products.filter(product => product.color == 'yellow');
// console.log(yellow);

const whiteItem = products.find(pro => pro.color == 'pink');
// console.log(whiteItem);


