# Math.min
Fungsi Math.min() mengembalikan nilai terbesar dari zero atau lebih besar.
### Deskripsi
Karena min() merupakan method static dari Math, anda perlu menggunakan Math.min(), daripada sebagai method dari objek Math yang anda buat (Math bukan constructor).
Jika tidak diberi argumen, hasilnya akan -Infinity.
Jika setidaknya satu argumen tidak dapat dikonversi ke angka, maka hasilnya NaN.

```javascript
console.log(Math.min(10, 20));   //  10
console.log(Math.min(-10, -20)); // -10
console.log(Math.min(-10, 20));   //  -10
```

bisa jugha menggunakan spead operator
```javascript
let arr = [1, 2, 3];
let min = Math.min(...arr);

console.log(min); // 1

let arr2 = [1, 2, 3];
let min2 = Math.min(arr2);

console.log(min); // Nan
```

memakai fungsi jugha bisa agar terus diulang sesuai kebutuhan
```javascript
function getminOfArray(numArray) {
    return Math.min.apply(null, numArray);
}
function getminOfArray2(numArray) {
    return Math.min(...numArray);
}

let num = [34, 66, 77, 90];

console.log(getminOfArray(num)); // 34
console.log(getminOfArray2(num)); // 34
```

coba bandingkan dengan yang bawah

```javascript
const numbers = [5, 6, 2, 3, 7];

const min = Math.min.apply(null, numbers);
const minMath = Math.min(...numbers);

console.log(min); // 5
console.log(minMath); // 5


const min = Math.max.apply(null, numbers);  

console.log(min);
// expected output: 7


```