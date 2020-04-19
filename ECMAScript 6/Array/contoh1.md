# array
Array adalah tipe data yang berisi kumpulan dari nilai atau tipe data lain. Nilai di dalam array disebut dengan elemen, dan setiap elemen memiliki ‘nomor urut’ yang dikenal dengan istilah index.
Penomoran index di dalam array dimulai dari angka 0, sehingga elemen pertama berada di index 0, elemen kedua berada di index 1, dst. Index maksimum yang bisa ditampung array dalam JavaScript adalah 4.294.967.294 (2^23 – 2), dengan jumlah elemen maksimum adalah 4.294.967.295.

#### contoh 1
```javascript
var arr1 = []                               // array kosong, 0 elemen
var arr2 = [1,2,3,4,5]                      // array dengan 5 elemen
var arr3 = [3,4.1,"belajar","JavaScript"]   // array dengan 4 elemen

console.log(arr3); //array
console.log(arr3.toString()); //dirubah menjadi string
```

#### contoh 2
```javascript
var arr4 = new Array();                     // array kosong, 0 elemen
var arr5 = new Array(1,2,3,4,5)             // array dengan 5 elemen
var arr6 = new Array(3,4.1,"belajar","JavaScript")  // array 4 elemen

console.log(arr4);
console.log(arr5);
console.log(arr6);
```


### contoh 3
```javascript
// BERKENALAN DENGAN ARRAY

const anime = ['naruto','sasuke','kakashi'];
anime[0]; //output naruto
anime[1]; //output sasuke
anime[2]; //output kakashi

//menampilkan semua 
console.log(anime);

//menampilkan salah satu
console.log(anime[0]);

// merubah nilai yg awalnya naruto menjadi uzumaki naruto
anime[0] = 'uzumaki naruto';
console.log(anime[0]);

//menambah array
anime[3] = 20;
// anime[4] = 'kita kosongkan'
anime[5] = 100;
// menampilkan semua
console.log(anime);

// untuk menghitung array
// leng membaca array dari satu sedangkan index 0
let lengOfAnime = anime.length;

// tampilkan
console.log(lengOfAnime);



// bagaimana cara mengambil kakashi dan yg lainya
let kakashi = anime[anime.length - 4];
let sasuke  = anime[anime.length - 5];
let naruto = anime[anime.length - 6];

console.log(kakashi,sasuke,naruto);


```

### contoh 4
```javascript
var arr1 = ["a","b","c","d","e"]; 
console.log(arr1.toString());    // hasil: a,b,c,d,e 
console.log(arr1.length);        // hasil: 5
  
```