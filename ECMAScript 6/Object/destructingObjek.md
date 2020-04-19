# destructingObject

> step 1

```javascript
let objek = {
  nama : 'marochi',
  umur : 20 
}
let {nama, umur} = objek;

console.log(nama); // marrochi
console.log(umur); // 20

```

> step 2

```javascript
let a, b;
({a,b} = {a:'hello',b:' jack'});
console.log(a + b); // hello jack
```

> step 3

```javascript

let {a,b} = {a:'hello',b:' jack'};
console.log(a + b); // hello jack

```

> step 4

```javascript
let o = {h: 42, s: true};
let {h: foo, s: bar} = o;

//console.log(h); // Error
console.log(foo); // 42
console.log(bar) // true
```

> step 5

```javascript
let obj = {id: 42, name: "Jack"};

let {id = 10, age = 20} = obj;

console.log(id); // 42
console.log(age); // 20
```