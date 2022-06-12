const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaim'];

const fLenghts = friends.map(friend => friend.length);
// console.log(fLenghts);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 20, color: 'pink' },
    { name: 'water glass', price: 100, color: 'white' },

]

const productName = products.map(product => product.name);
console.log(productName);

const productPrices = products.map(product => product.price);
console.log(productPrices);

const productColor = products.map(color => color.color);
console.log(productColor);