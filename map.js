const numbers = [4, 6, 8, 10];
const output1 = [];

// normal function 
// function doubleOld(number) {
//     return number * 2;
// }

// Arrow function
const doubleIt = number => number * 4;
for (const number of numbers) {

    const result = doubleIt(number);
    output1.push(result);
}
console.log(output1);