# Scope

### Block Scope Variables

Variable yang ada di javascript ada scopenya sendiri sendiri, jika **var** adalah block scope function (nanti akan dibahas dibawah) maka **let** dan **const** adalah block scope variable.

Block scope di tandai dengan {}

```javascript
let a = 0;
const b = 0;

console.log(a);
console.log(b);
```

coba jalankan kode diatas, lalu lihat apa yang terjadi. Bagaimana dengan ini ?

```javascript
{
  let a = 0;
  const b = 0;
}

console.log(a); // error
console.log(b); // error
```

begitupun jika kita menggunakan block block scope seperti di dalam **for, if else, switch case**, kita tidak akan bisa mengakses **let/const** yang berada dalam block scope.

```javascript
const flag = true;

if (flag) {
  let c = 0;
}

console.log(c); // error

//or 

const flag = true;
let c;
if (flag) {
   c = 0;
}

console.log(c); // 0
```

### Block Scope Functions

Sebelumnya sudah disinggung bahwa **var** bukanlah block scope variable namun block scope function, artinya var bisa di akses dimanapun selama dia tidak keluar dari function (jika ada function).

```javascript
const flag = true;

if (flag) {
  var c = 0;
}

console.log(c);
```

Namun jika di luar function, dia tidak bisa di akses

```javascript
function scope() {
  var d = 1;
}

scope();
console.log(d);
```

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