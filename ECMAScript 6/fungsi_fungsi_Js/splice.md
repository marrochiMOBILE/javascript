# splice
Depan sudah belakang juga sudah, bagaimana dengan tengah ? well kita bisa menggunakan splice, namun ada beberapa parameter yang mesti kita perhatikan.

```javascript
splice(startingIndex, deletedCount, value);
```

```
startingIndex => index dari sebuah array yang akan kita rubah (ingat index di awali dari 0)

deletedCount => adalah berapa yang ingin kita hapus

value => adalah value yang akan kita tambahkan
```

```javascript
const numbers = [1, 2, 5, 6, 8, 9];



numbers.splice(3, 0, 3, 4);

console.log(numbers); // [ 1, 2, 5, 3, 4, 6, 8, 9]
```

contoh dibawah ini  dia memulai index `ke-2` dan diikuti `2 baris yg di hapus` kemudian baru valuenya dimasukin di index yg tadi yaitu  ke-2 berarti setelah `1[0],2[1],baru disini ditambahain`
```javascript
const numbers = [1, 2, 5, 6, 8, 9];



numbers.splice(2, 2, 3, 4);

console.log(numbers); // [ 1, 2, 3, 4, 8, 9 ]
```

> menggunakan splice di array untuk memulai dan berpa yg dihapus diapus

# Removing Elements in Array menggunakan splice

Sekarang, kita akan mencoba untuk meremove element di dalam array.

Caranya adalah menggunakan length

```javascript
const arr = [0, 1, 2, 3];

arr.length = 0;

console.log(arr); // []
```

Atau menggunakan splice

```javascript
const arr = [0, 1, 2, 3];

arr.splice(0, arr.length);

console.log(arr);
```

Lagi lagi butuh length bukan ?

Nah, ada satu tips lagi untuk kita, jangan menggunakan reassign

```javascript
let arr = [0, 1, 2, 3];
let another = arr;

arr = [];

console.log(arr); // []
console.log(another); // [0, 1, 2, 3]
```


## lanjutan 2

```javascript
var arr = ["One", "Two", "Five"];

arr.splice(2, 0, "Three");
arr.splice(3, 0, "Four");
console.log(arr);
```

```javascript
let newArr = ['Three', 'Four']; 
let arr = ['One', 'Two', ...newArr, 'Five'];
console.log(arr);
```
