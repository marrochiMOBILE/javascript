# Arrow Function

> tanpa parameter 
```javascript
const tanpaParamete = () =>  'fungsi tanpa parameter berhasil';
}
const tanpaParameter = () => {
    return 'fungsi tanpa parameter berhasil';
}

let tanpaParameterx = () => 'fungsi tanpa parameter x berhasil' ;

let tanpaParametery = (j => 'fungsi tanpa parameter y berhasil') ;  // tidak di anjurkan jika tidak ada nilai parameter

console.log(tanpaParamete());
console.log(tanpaParameter());
console.log(tanpaParameterx());
console.log(tanpaParametery());

```

> satu parameter 
```javascript
const tanpaParameter = nama => {
    return 'fungsi satu parameter berhasil ' + nama;
}
let tanpaParameterx = nama => 'fungsi satu parameter x berhasil' + nama ;
let tanpaParametery = (nama => 'fungsi satu parameter y berhasil' + nama) ;  // tidak di anjurkan jika tidak ada nilai parameter

console.log(tanpaParameter('ochi'));
console.log(tanpaParameterx('ochi'));
console.log(tanpaParametery('ochi'));
```

banyak parameter
```javascript
const tanpaParameter = (nama, angka) => {
    return 'fungsi banyak parameter berhasil ' + nama + 'angka ke-'+angka;
}
let tanpaParameterx = (nama, angka) => 'fungsi banyak parameter berhasil ' + nama + 'angka ke-'+angka;
let tanpaParametery = (nama, angka) => ( 'fungsi banyak parameter berhasil ' + nama + 'angka ke-'+angka) ;  // tidak di anjurkan jika tidak ada nilai parameter

console.log(tanpaParameter('ochi', 7));
console.log(tanpaParameterx('ochi', 9));
console.log(tanpaParametery('ochi', 1));
```

ES6 memperkenalkan fat arrow **=>** untuk mendeklrasikan function.

Jika di ES5 kita biasa menggunakan

```javascript
var sayIt = function(name) {
  return 'Hello ' + name;
};

console.log(sayIt('ochi'));
```

Dengan fat arrow kita bisa menulis seperti ini

```javascript
const sayIt = name => {
  return `Hello ${name}`;
};

console.log(sayIt('ochi'))
```
> atau dengan cara yang berbeda dibawah ini

```javascript
const sayIt = (name => `nama saya ${name}`  );

console.log(sayIt('ochi'))
```

Jika kita hanya punya satu parameter, kita bisa menghapus tanda kurungnya

```javascript
const sayIt = name => {
  return `Hello ${name}`;
};
```

Dan apabila kita tidak mempunyai parameter apapun, kita bisa tanda kurung saja

```javascript
const sayIt = () => {
  return 'Hello';
};
```
kemudian jika ada beberpa parameter bisa seperti dibawah ini

```javascript
const sayIt = (name, umur) => {
  return `Hello ${name} umur saya ${umur}`;
};

console.log(sayIt('ochi', 30))
```

### Exclude Return

Dengan arrow function kita bisa menghilangkan return seperti ini

```javascript
const sayIt = name => `Hello ${name}`;
```

Kalau kita ingin me*return* object, kita bisa menggunakan

```javascript
const animal = ['cat', 'rabbit', 'dog'];
const pet = 'yes, they are pets';

const result = animal.map((ani, i) => ({ animal: ani, pet, rank: i + 1 }));

console.log(result);
// [ { animal: 'cat', pet: 'yes, they are pets', rank: 1 },
//   { animal: 'rabbit', pet: 'yes, they are pets', rank: 2 },
//   { animal: 'dog', pet: 'yes, they are pets', rank: 3 } ]
```

Menulis `pet` dan `pet: pet` itu sama saja.

```javascript
const animal = ['cat', 'rabbit', 'dog'];
const pet3 = 'yes, they are pets';
const kata = 'avengers'
const result = animal.map((ani, i) => ({ animal: ani, pet3, judul: kata, rank: i + 1 }));

console.log(result);
```

### Arrow Function itu Anonymous

Jika kita ingin menambahkan nama, maka kita bisa memasukkan function kita di dalam sebuah variable

```javascript
const myFunction = name => `Hai ${name}`;

myFunction('bashocode');
```
