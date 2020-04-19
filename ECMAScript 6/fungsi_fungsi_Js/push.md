# push

Lalu jika kita ingin menambah dari belakang ? Kita bisa menggunakan push.

```javascript
const numbers = [5, 6];

numbers.unshift(1, 2); // meambah dari depan

numbers.push(7, 8); 

console.log(numbers); // [1, 2, 5, 6, 7, 8]
```

## perbandingan push dengan concat

```javascript
console.log('-- push --');
let numbers = [5, 6];

let numbersTwo = [1, 2, 3, 4]

numbers.push(numbersTwo); 

console.log(numbers); // [ 5, 6, [ 1, 2, 3, 4 ] ]

console.log('\n------ bandingkan \n')

console.log('-- concat --');
let numbersCopy = [5, 6];

let numbersCopyTwo = [1, 2, 3, 4];

let aim = numbersCopy.concat(numbersCopyTwo); 

console.log(aim); // [ 5, 6, 1, 2, 3, 4 ]

/*
let numbersCopy = [5, 6];

let numbersCopyTwo = [1, 2, 3, 4];

numbersCopy.concat(numbersCopyTwo); 

console.log(numbersCopy); // [ 5, 6]

funsi concat tidak berjalan, tidak halnya push

*/
```