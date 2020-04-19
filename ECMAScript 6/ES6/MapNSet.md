# Map dan Set

Peta ES6

Objek Peta dapat digunakan untuk menahan pasangan kunci / nilai. Kunci atau nilai dalam peta bisa berupa apa saja (objek dan nilai primitif).

Sintaks Map baru `([iterable])` membuat objek Map di mana iterable adalah array atau objek iterable lainnya yang elemen-elemennya adalah array (dengan masing-masing pasangan kunci / nilai).

```javascript
let map = new Map([['k1', 'v1'], ['k2', 'v2']]);

console.log(map.size); // 2

let map2 = new Map([['k1', 'v1'], ['k2', 'v2'],['aksnl', 'asbkasbkj']]);

console.log(map.size); // 2
```

> next 2

```javascript
let map = new Map();

map.set('k1', 'v1').set('k2', 'v2');

console.log(map.get('k1')); // v1

console.log(map.has('k2')); // true

console.log(map) // Map { 'k1' => 'v1', 'k2' => 'v2' }

for (let kv of map.entries())
  console.log(kv[0] + " : " + kv[1]);
```