# Inside of Object

Object bersifat dinamis, yakni kita bisa mengubah isinya seperti menambah atau menghapusnya.

```javascript
const phone = {
  merk: "Yeskia"
};

console.log(phone);
```

Kita bisa menambah key di dalam constant phone

```javascript
const phone = {
  brand: "Yeskia"
};

// menambah property
phone.os = "Android";
// atau menambah method
phone.madeBy = function() {
  return "Somewhere";
};

console.log(phone);
```

Bukankah constant itu nilainya tetap ? tidak bisa di rubah ?

Benar, constant memang tidak bisa di rubah, tapi maksudnya disini adalah re-assign seperti ini

```javascript
const phone = {
  merk: "Yeskia"
};

phone = {}; // error

// bandingkan

/*
    let phone = {
        merk: "soliha"
    };

    phone = {}; // {}
*/
```

Kode di atas jika dijalankan maka error, karena kita me assign ulang sebuah constant.

Namun, jika kita merubah isi di dalamnya tetap bisa, seperti contoh sebelumnya, bahkan kita juga bisa menghapusnya

```javascript
const phone = {
  brand: "Yeskia"
};

phone.os = "Android";
phone.madeBy = function() {
  return "Somewhere";
};

// dengan menggunakan delete

delete phone.os;
```

# Inside of Array

```javascript
// let phone = ['batin']

// phone = [];

// console.log(phone) // []

// coba bandingkan 

/*
      Coba BANDINGKAN
*/

const phone2 = ['batin']

phone2 = [];
// jika anda  ingin mengapus merk seperti ini untuk mengkosongkan 
// delete phone[0]

console.log(phone2) // error
```
## contoh ke-2

*** contoh error ****
```javascript
    const numbers = [5, 6];
    numbers = [1, 2];

    console.log(numbers);
```

*** contoh yang bisa ***
```javascript
    const numbers = [5, 6];
    numbers[0] = 1;
    numbers[1] = 2

    console.log(numbers);
```


# Why we should avoid var ?

Kita pasti sudah tahu bahwa di JavaScript ada 3 variable bukan ? yakni **var, let, dan const**

Lalu kenapa kita tidak pernah menggunakan var sama sekali ? Sebelumnya sudah belajar tentang scope bukan, dan var tidak mengenal apa itu scope.

Jalankan kedua kode di bawah ini dan bandingkan perbedaannya

```javascript
function nice() {
  if (true) {
    let name = 'bashocode';
  }

  console.log(name);
}
nice() // eror
```

---

```javascript
function nice() {
  if (true) {
    var name = 'bashocode';
  }

  console.log(name);
}

nice()
```

Jika menggunakan let, maka dia akan error dan jika menggunakan var maka tetap akan keluar, nah disini-lah masalahnya

```
var => function scope
const/let => block scope
```

var bisa kita akses dimana saja selama di dalam sebuah function, dan itu menjadi masalah selama ini sampai akhirnya ES6 (EcmaScript 2015) datang dan membawa const dan juga let yang memperbaiki hal ini.

# lanjutan 2

> scope

#### contoh 1
```javascript
  var a = 10;
var a = 20;

console.log(a); // 20

let a = 10;
let a = 20;

console.log(a); // error
```
kenapa let bisa error? ayo kenapa?

#### contoh 2
```javascript
var a = 10;
if(true){
    var a = 30;
    console.log(a); // 30
}
console.log(a); // 30

console.log('\n ---------- PEMISAH ---------- \n');

let b = 10;
if(true){
    let b = 30;
    console.log(b); // 30
}

console.log(b); // 10
```
contoh diatash terlihat jelas bukan perbedaanya?

#### contoh 3
```javascript
var a = 0;
var i = 0;

for(i=1; i<=3; i++ ){
   var a = a + i;
    console.log(a); // 1 + 2 + 3
}
console.log(a); // 6

let y = 0;
let z = 0;

for(xway=1; z<=3; z++ ){
    let y = y + z;
    console.log(y); // error
}
console.log(y); // error
```
gimana udah tau belum? sangat jelas bukan perbedaan var dan let, dibawah ini masih ada contoh lanjuan

#### contoh 4
```javascript
function varTest(){
    var x = 1;
    if(true){
        var x = 2; // variable sama
        x++;
        console.log(x); // 3
    }
    x++;
    console.log(x) // 4
}

function letTest(){
    let x = 1;
    if(true){
        let x = 2; // variabel berbeda
        x++;
        console.log(x); // 3
    }
    x++;
    console.log(x) // 2
}

console.log(varTest());
console.log(letTest());
```

terus pertanyaannya bagaimana var agar tidak bisa di akses ....? yaitu dia scope function bukan scope variable contohnya dibawah ini;

```javascript
function varTest(){
    var  x = 'adalah var'
}

console.log(x); // eror

// bandingkan

/* 
if(true){
    a = 'adalah var'
}
console.log(a);
*/

//bandingkan
/*var tes = 2;
switch(tes){
        case 1 : 
        var sueb = 'ini adalah case 1';
        break;
        case 2 : 
        var sueb = 'ini adalah case 2';
        break;
        default :
        var sueb = 'gagal';
        break;
}
console.log(sueb);*/


```