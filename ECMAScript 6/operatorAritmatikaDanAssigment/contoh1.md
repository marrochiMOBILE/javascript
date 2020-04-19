# Opreator Aritmatika Dan Assigment

#### contoh 1
```javascript
// mengenal operator aritmatika dan assigment

let numberOne = 5;
const numberTwo = 3;
numberOne =  ++numberOne; 
console.log(numberOne + numberTwo); 
console.log(numberOne - numberTwo);
console.log(numberOne * numberTwo);
console.log(numberOne / numberTwo);
console.log(numberOne % numberTwo);
console.log(numberOne);

console.log('\n\n ------------------------- \n\n');


// perpangkatan
const numberThree = 2;
let pangkatOne = numberThree ** 1; // 4 
let pangkatTwo = numberThree ** 2; // 4 * 4
let pangkatThree = numberThree ** 3; // 4 * 4 * 4
let pangkatFour = numberThree ** 4; // 4 * 4 * 4 * 4

// bisa jugha menggunkan Math.pow
let pangkatFive =  Math.pow(numberThree,5);

console.log(pangkatOne);
console.log(pangkatTwo);
console.log(pangkatThree);
console.log(pangkatFour);
console.log(pangkatFive);


console.log('\n\n ------------------------- \n\n');

let numberFour = 10;
console.log(numberFour++);
console.log(numberFour);
console.log(numberFour--);
console.log(numberFour);


numberFour = numberFour + 5;
console.log(numberFour);

// kita jugha bisa menggunakan seperti ini
console.log(numberFour += 5); // 15 + 5 = 20
console.log(numberFour -= 5); // 20 - 5 = 15
console.log(numberFour **= 5); // 15 * 15 * 15 * 15 * 15





```