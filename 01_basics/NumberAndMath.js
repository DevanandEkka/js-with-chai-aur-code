const score = 400
// console.log(score);

const balance = new Number(5000)
// console.log(balance);


// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber =23.8966
// console.log(otherNumber.toPrecision(2));

const hundred = 100000000000000000000000
// console.log(hundred.toLocaleString());// by default usa values


// console.log(hundred.toLocaleString('en-IN'));// indian style

//*********math * math liberary comes with java Script by default* */

// console.log(Math);
// console.log(Math.abs(-8));
// console.log(Math.round(8.6));
// console.log(Math.round(8.2));
// console.log(Math.ceil(8.01));
// console.log(Math.floor(8.2));
// console.log(Math.min(1,2,3,4,4,4,332,));
// console.log(Math.max(1,2,3,4,4,4,332,));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 1
const max = 6

console.log(Math.floor (Math.random() * (max - min + 1)) + min)