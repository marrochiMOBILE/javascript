# Combined and Slicing Arrays

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

const thirdArray = firstArray.concat(secondArray);
const fourthArray = thirdArray.slice(1, 3);

console.log(fourthArray); // [2, 3]
console.log(thirdArray); // [1, 2, 3, 4]

```

Parameter pertama dari slice adalah starting index, dan yang kedua adalah finish seperti contoh diatas jadi `[ 1[0], {2[1], 3[2], } 4[3] ]` dimilai dari index 1 dan diakhiri index 3