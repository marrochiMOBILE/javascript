# findIndex

Kita tidak bisa menggunakan cara dari primitive data types untuk mencari element di reference data types.

Jadi kita akan menggunakan method berupa find dan findIndex.

```
find => mereturn value jika di temukan, dan undefined jika tidak ada

findIndex => mereturn index value jika di temukan dan -1 jika tidak (mirip indexOf)
```
```javascript
const cars = [
  { id: 1, name: 'Ferrari' },
  { id: 2, name: 'Lamborghini' },
  { id: 3, name: 'Porsche' },
  { id: 4, name: 'Bugatti' }
];

const car = cars.find(car => {
  return car.name === 'Ferrari';
});
const car2 = cars.findIndex(car => {
  return car.name === 'Ferrari';
});

console.log(car); // { id: 1, name: 'Ferrari' }

const carIndex = cars.findIndex(car => car.name === 'Ferrari'); // 0

console.log(carIndex); // 0

console.log(car2);
```