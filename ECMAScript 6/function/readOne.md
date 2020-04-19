#  Basic Function Declaration vs Expression

Dalam JavaScript ada dua tipe function, yakni declaration dan juga expression dan ini berbeda dengan performing atau calculating function. Silakan buka intro to function.

### Declaration

Funtion Declaration adalah function yang biasa kita gunakan,

```javascript
function play() {
  console.log('play');
}

play();
```

### Expression

Sedangkan Function Expression menggunakan variable, maksudnya function yang menjadi value dalam variable.

Dan ada dua type function expression disini, yakni anonymouse dan named.

```javascript
// anonymouse function expression
const play = function() {
  console.log('play');
};

play(); // play

// named function expression
const read = function book() {
  console.log('reading');
};

read(); // reading

const write = function book(nama) {
  console.log(nama);
};


write('nama saya ochi'); // nama saya ochi

const hoax =  function (nama) {
  console.log(nama);
};

hoax('kebohongan'); // kebohongan

```

anonymouse tidak mempunyai nama function, berbeda dengan named, nah kita menggunakan titik koma juga **;** karena function diatas adalah value dari sebuah variable

Lalu kita juga bisa mengganti const dengan let

# Arguments

Kali ini kita akan belajar tentang argumen di javascript,

```javascript
function myName() {
  console.log(arguments);
}

myName('bashocode');
```

arguments adalah cara memanggil parameter yang tak bernama, namun jika kita jalankan kode diatas maka yang keluar adalah object

Lalu bagaimana caranya agar kita bisa mengakses value dari arguments ?

```javascript
function myName() {
  for (let value of arguments) {
    console.log(value);
  }
}

myName('bashocode', 'basho', 'code');
```

Kita bisa menggunakan for of loop, loh bukannya for of untuk array ? inikan object harusnya for in donk

Benar, tetapi ini pengecualian, kalau kita menggunakan for in loop yang keluar nanti malah keynya bukan valuenya.

Kalau tidak percaya, coba kode ini

```javascript
function myName() {
  for (let key in arguments) {
    console.log(key);
  }
}

myName('bashocode', 'basho', 'code');
```

# Getter and Setter

Saat kita ingin memanggil sebuah function di dalam object kita harus meng*invoke*nya bukan ?

```javascript
const person = {
  firstName: 'Basho',
  lastName: 'Code',
  // 1
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  }
};

console.log(person.fullName());
```

Penjelasannya

1. Kita bisa langsung menggunakan function seperti diatas, sama seperti saat kita

```javascript
const person = {
  fullName: function() {
    return 'name';
  }
};
```

Hanya saja lebih simple penggunaannya

---

Dengan menggunakan getter and setter kita tidak perlu meng*invoke*nya

```javascript
const person = {
  firstName: 'Basho',
  lastName: 'Code',

  // 1
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },

  // 2
  set fullName(name) {
    // 3
    const yourName = name.split(' ');
    // 4
    this.firstName = yourName[0];
    this.lastName = yourName[1];
  }
};

// 5
person.fullName = 'JohnDoe eeea';

console.log(person.fullName);
```

Penjelasannya

1. Kita menambahkan get sebelum nama functionnya, untuk mendapatkan valuenya
1. Set di gunakan jika kita mempassing nama lain kedalamnya, dan saat itulah get dan set bekerja
1. Kenapa split ? karena kita mempassing 'John Doe' dan ada spasi disana
1. Index ke 0 adalah John, dan ke 1 adalah Doe
1. Kita seperti memanggil function dengan mempassing valuenya

```javascript
person.fullName('John Doe');
```

Lalu coba di comment dulu deh untuk tau bedanya, code nomer 5.

Dan untuk this, nanti akan ada penjelasannya.

Jadi get dan set akan bekerja jika kita memanggil functionnya tentunya tanpa _invoke_ atau kita juga ingin mengganti valuenya (jadi valuenya dinamis sesuai dengan inputan)

# Hoisting

Apa itu hoisting ? Sebelum menjawabnya mari kita coba eksperiment sebentar

```javascript
play();

function play() {
  console.log('play');
}
```

Apakah kita bisa menjalankan code diatas ?

Jawabannya bisa, kenapa ? Karena di dalam javascript semua function akan di baca terlebih dahulu alias function akan otomatis berada di atas file kita

Begini sederhananya, function akan di prioritaskan oleh compiler jadi meskipun function yang kita punya berada di paling bawah sebuah file sekalipun, compiler akan mencari function terlebih dahulu baru kemudian akan membaca code kita yang lain.

Lalu, bagaimana dengan ini ?

```javascript
play();

read();

// anonymouse function expression
const play = function() {
  console.log('play');
};

// named function expression
const read = function book() {
  console.log('reading');
};
```

Hasilnya akan error, kenapa ? karena sifatnya bukan function, mereka adalah variable yang kebetulan mempunyai value berupa function.

# Parameter

Mari kita belajar lebih dalam tentang Parameter sebuah function

```javascript
function shopping(price, discount) {
  const disc = discount * 100;
  return price - disc;
}

console.log(shopping(999)); // NaN
```

Apa yang terjadi jika kita jalankan kode diatas ? Yap, that's right

Jadi kita akan menggunakan cara ini

```javascript
function shopping(price, discount) {
  discount = discount || 0.2;

  const disc = discount * 100;
  return price - disc;
}
let tes;
console.log(shopping(999)); // 979
console.log(tes || 0.2); // 0.2
```

Tau kan maksud kode diatas ? Jika paham truthy dan falsy pasti ngeh

Nah, di ES6 kita bisa menggunakan cara yang lebih simple yakni

```javascript
function shopping(price, discount = 0.2) {
  const disc = discount * 100;
  return price - disc;
}

console.log(shopping(999));
```
# Rest Operator

Rest Operator menggunakan titik tiga seperti spread operator, namun rest operator ada di parameter sebuah function

```javascript
function tambah(...tambah){
  return tambah;
}

console.log(tambah(1, 2, 3, 4, 5)); // 1, 2, 3, 4, 5



function sum(num) {
  return num;
}

console.log(sum(1, 2, 3, 4, 5)); // 1
```

Jika kita jalankan kode di atas maka akan keluar array, dan seperti yang sudah kita pelajari sebelumnya, jika kita ingin menjumlahkan angka di atas (dan berupa array) maka kita akan menggunakan reduce

```javascript
function sum(...num) {
  return num.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));
```

Lihat, kita menggunakan ...num hanya pada parameter function, dan untuk memanggilnya kita tidak perlu menggunakannya lagi

# Local and Global Scope

Scope adalah hal penting yang harus kita pahami, pertama kita akan membahas local scope.

```javascript
const word = 'hello';

console.log(word);
```

Jika kita menjalankan kode diatas, maka akan keluar _hello_ bukan ?

```javascript

{
  const word = 'hello';
}

console.log(word); // eror


```

Namun jika kita memasukkan const word kedalam _code block_ maka akan terjadi error, itulah yang dinamakan scope.

Sekarang, coba ganti const menjadi let.

Lalu apa contoh dari code block ?

1. function

```javascript
function test() {
  const word = 'hello';
}

console.log(word); // error
```

1. if else

```javascript
if (true) {
  const word = 'hello';
}

console.log(word); // eror
```

Atau, sama saja dengan ini karena cuma satu line code jadi bisa di hapus kurung kurawalnya

```javascript
if (true)
  const word = 'hello';

console.log(word); // eror
```

1. loop

```javascript
for (let i = 0; i < 5; i++) {
  const word = 'hello';
}

console.log(word); // eror
```

atau

```javascript
for (let i = 0; i < 5; i++)
  const word = 'hello';

console.log(word); // eror
```

Misalkan kita punya dua function

```javascript
function letter() {
  const word = 'hello';
  return word;
}

function mail() {
  const word = 'world!';
  return word;
}

console.log(letter()) // hello
console.log(mail()) // world!
```

Kode diatas tetap bisa dijalankan, meskipun ada dua _const word_ disana. Kenapa ? Karena mereka berbeda scope, ibaratnya ruangan A punya murid bernama 'Ali' dan ruangan B juga punya murid bernama 'Ali' dan mereka tetap berbeda bukan ?

---

Lalu, kita akan membahas tentang global

```javascript
const name = 'Brew';

function print() {
  console.log(name);
}

console.log(print()) //  brew

// or

const name = 'Brew';

function print() {
  return name;
}

console.log(print()); // brew
```

Kita tetap bisa mengakses name karena name ada di global scope, bahkan jika kita punya function lain, kita tetap bisa mengakses name tersebut.

```javascript
const name = 'Brew';

function print() {
  const name = 'Rashta';
  return name;
}

console.log(print()) // Rashta
```
#### atau

```javascript
const name = 'Brew';

function print(name) {
  return name;
}

console.log(print('marrochi')) // marrochi
```
Coba jalankan kode diatas, variable di dalam local scope lebih kuat dari global scope

Dan best practicenya kita jangan menggunakan global scope, karena bisa saja terjadi insiden mengganti valunya dan terjadilah error.

# This

Sebelumnya kita telah melihat this, dan kali ini kita akan mencoba memahami apa itu this.

### This in Method

Jika kita punya function di dalam sebuah object maka function ini dinamakan method

```javascript
const book = {
  title: 'JavaScript',
  read() {
    console.log(this);
  }
};

book.read(); 
/*
{ title: 'JavaScript', read: [Function: read] }
*/


```

Kode diatas akan memunculkan semua isi dari object tersebut.

Atau kita ingin menambah method lain ?

```javascript
const book = {
  title: 'JavaScript',
  read() {
    console.log(this);
  }
};

book.mark = function() {
  console.log(this);
};

book.read();
/*
{ title: 'JavaScript', read: [Function: read], mark: [Function] }
*/
```

Hasilnya juga akan memunculkan semua isi di dalam object

### This in Function

Nah, jika di dalam function murni kita tidak menggunakan seperti dibawah ini

```javascript
function book() {
  console.log(this);
}

book(); 
/*
Object [global] {
  global: [Circular],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(util.promisify.custom)]: [Function]
  }
}
*/
```

Tetapi, bisa menggunakan new.

```javascript
function Book(title) {
  this.title = title;

}

const newBook = new Book('JavaScript is Nice');

console.log(newBook); // Book { title: 'JavaScript is Nice' }
```

Coba jalankan kode diatas.

```
this.title => akan membuat sebuah key baru berupa title dan mempunyai value dari parameter title
new Book() => akan menjalankan function untuk membuat buku baru dengan judul yang di passing
```
