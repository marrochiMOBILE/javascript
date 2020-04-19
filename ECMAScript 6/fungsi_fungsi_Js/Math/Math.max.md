# Math.max
Fungsi Math.max() mengembalikan nilai terbesar dari zero atau lebih besar.
### Deskripsi
Karena max() merupakan method static dari Math, anda perlu menggunakan Math.max(), daripada sebagai method dari objek Math yang anda buat (Math bukan constructor).
Jika tidak diberi argumen, hasilnya akan -Infinity.
Jika setidaknya satu argumen tidak dapat dikonversi ke angka, maka hasilnya NaN.

```javascript
console.log(Math.max(10, 20));   //  20
console.log(Math.max(-10, -20)); // -10
console.log(Math.max(-10, 20));   //  20
```

bisa jugha menggunakan spead operator
```javascript
let arr = [1, 2, 3];
let max = Math.max(...arr);

console.log(max); // 3

let arr2 = [1, 2, 3];
let max2 = Math.max(arr2);

console.log(max); // Nan
```

memakai fungsi jugha bisa agar terus diulang sesuai kebutuhan
```javascript
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
function getMaxOfArray2(numArray) {
    return Math.max(...numArray);
}

let num = [34, 66, 77, 90];

console.log(getMaxOfArray(num)); // 90
console.log(getMaxOfArray2(num)); // 90
```

coba bandingkan dengan yang bawah

```javascript
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);
const maxMath = Math.max(...numbers);

console.log(max); // 7
console.log(maxMath); // 7


const min = Math.min.apply(null, numbers);  

console.log(min);
// expected output: 2


```