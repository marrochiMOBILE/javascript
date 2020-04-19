# Comparison - Relational

#### contoh 1
```javascript
const numberOne = 5;

console.log(numberOne > 5); // false
console.log(numberOne >= 5); // true

console.log('\n--------------------\n');

console.log(numberOne < 7); //ture
console.log(numberOne < 5) //false
console.log(numberOne <= 5); //true

console.log('\n--------------------\n');

console.log(numberOne == 5); //true
console.log(numberOne != 5); //false
console.log(numberOne === 5); //true

```


# Comparison -   Equality


#### contoh 1

```javascript
/*
comparison - Equality
*/


// sama dengan 2 tidak sama dengan sama dengan 3


// contoh 1
console.log(1 == 1);  //true
console.log(1 === 1); //true


console.log('\n contoh 2');
/*
ketika sama dengan 2 true itu dikarenakan membaca dari kiri ke kanan.
yang kanan diconvert menjadi data yg serupa sesuai yg dikiri
*/

// contoh 2
console.log('1' == 1); //true
console.log('1' === 1);  //false

console.log('\n');

console.log(1 == '1'); // true
console.log(1 === '1'); // false

console.log('\n  contoh 3 ');



// contoh 3
console.log(true == 1);  //true
console.log(true == '1'); //true

console.log('\n');

console.log(true === 1); //false
console.log(true === '1'); //false

console.log('\n');

console.log(true != 1);  //false
console.log(true != '1'); //false

console.log('\n');

console.log(true !== 1); //true
console.log(true !== '1'); //true

console.log('\n contoh tiga false'); //--------------------false


console.log(false == 0);  //true
console.log(false == '0'); //true

console.log('\n');

console.log(false === 0); //false
console.log(false === '0'); //false

console.log('\n');

console.log(false != 0);  //false
console.log(false != '0'); //false

console.log('\n');

console.log(false !== 0); //true
console.log(false !== '0'); //true



```