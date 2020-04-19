# Concat

Kita bisa menggabungkan dua array dengan concat.

```javascript
const firstArray = [3, 4];
const secondArray = [1, 2];

const thirdArray = firstArray.concat(secondArray);

console.log(thirdArray); // [3, 4, 1, 2]
```

Lalu kita juga bisa membagi array dengan slice

```javascript
const firstArray = [1, 2];
const secondArray = [3, 4];

const thirdArray = firstArray.concat(secondArray); // [1, 2, 3, 4]
const fourthArray = thirdArray.slice(1, 3);

console.log(fourthArray); // [2, 3]
console.log(thirdArray); // [1, 2, 3, 4]

```

## perbandingan cncat dah push

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

Parameter pertama dari slice adalah starting index, dan yang kedua adalah finish seperti contoh diatas jadi `[ 1[0], {2[1], 3[2], } 4[3] ]` dimilai dari index 1 dan diakhiri index 3


function myFunction(w, x, y, z){
    console.log( w + x + y + z);
}

let args = [1,2,3];
myFunction() // NaN
myFunction.apply(null, args.concat(4)) // 10

console.log(args.apply(null, ))