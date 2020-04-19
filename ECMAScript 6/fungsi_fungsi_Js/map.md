# map 

Biasa digunakan untuk : merubah semua elemen di dalam suatu array menjadi elemen dengan nilai yang baru.
```javascript
var numbers = [65, 44, 12, 4];
var newarray = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

console.log(newarray);
```
```javascript
const animal = ['cat', 'rabbit', 'dog'];
const pet = 'yes, they are pets';

const result = animal.map((ani, i) => ({ animals: ani, pets:pet, rank: i + 1 }));

console.log(result);
// [ { animals: 'cat', pets: 'yes, they are pets', rank: 1 },
//   { animals: 'rabbit', pets: 'yes, they are pets', rank: 2 },
//   { animals: 'dog', pets: 'yes, they are pets', rank: 3 } ]


let animals = [...animal];
let pets = pet;

let results = animals.map((parameter1, parameter2) => ({parameter1, pets, ranks : parameter2 + 1}));
console.log(results);
/*
[
  { parameter1: 'cat', pets: 'yes, they are pets', ranks: 1 },
  { parameter1: 'rabbit', pets: 'yes, they are pets', ranks: 2 },
  { parameter1: 'dog', pets: 'yes, they are pets', ranks: 3 }
]
 */
```

> bilangan desimal menjadi bilangan binner
Contoh : merubah semua bilangan desimal menjadi bilangan biner (basis 10 ke basis 2).
```javascript

var bilanganDesimal = [1,2,3,4,5];

var bilanganBiner = bilanganDesimal.map( (element) => {
 	return element.toString(2);   
})

console.log(bilanganBiner); // ["1", "10", "11", "100", "101"]


// atau

let arr = [1,2,3,4,5];
let index = arr.map((any) => (any.toString(2)));

console.log(index)
```