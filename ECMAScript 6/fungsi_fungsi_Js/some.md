# Some

Jika kita ingin mencari value sebuah array, misalkan apakah semua angka di dalam array adalah positif kita bisa menggunakan method every.

```javascript
const numbers = [1, 2, 3];

const allPositive = numbers.every(function(value) {
  return value >= 0;
});

console.log(allPositive); // true
```

Every menerima parameter sebuah callback function, dan mereturn apakah setiap value dari array yang di berikan berupa positif.

Namun, jika di dalam array ada satu saja angka negatif

```javascript
const numbers = [1, -2, 3];

const allPositive = numbers.every(function(value) {
  return value >= 0;
});

console.log(allPositive); // false
```

Maka akan mereturn false, dan seketika itu juga every akan menghentikan operasinya. Meskipun masih ada banyak sekali value di dalam array yang belum di cek.

Lalu, untuk mencari setidaknya ada satu angka positif di dalam sebuah array kita bisa menggunakan some

```javascript
const numbers = [-1, -2, 3];

const allPositive = numbers.some(function(value) {
  return value >= 0;
});

console.log(allPositive); // true
```

```javascript
    const car = cars.find(car => {
    return car.name === 'Ferrari';
    });
```
##### atau
```javascript
const cars = [
  { id: 1, name: 'Ferrari' },
  { id: 2, name: 'Lamborghini' },
  { id: 3, name: 'Porsche' },
  { id: 4, name: 'Bugatti' }
];
    const car = cars.find(cars => cars.name === 'Ferrari');
    console.log(car);
```

Kalian juga bisa menggunakan arrow function, sebagai latihan rubah semua function diatas menjadi arrow function
