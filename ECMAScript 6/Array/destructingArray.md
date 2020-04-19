# destructingArray

> step 1

```javascript
let arr  = ['1','2','3'];
let [satu, dua, tiga] = arr;

console.log(satu); // 1
console.log(dua); // 2
console.log(tiga); // 3

```

> step 2

```javascript
let arr  = () => ['1','3','2'];
let [satu, , dua] = arr();

console.log(satu); // 1
console.log(dua); // 2

```

> step 3

```javascript
let a, b, c=4, d=8;
[a, b=6] = [2]; // a = 2, b = 6
console.log(a);// 2
console.log(b); // 6

[c, d] = [d, c]; // c = 8, d = 4
console.log(c); // 8
console.log(d); // 4

```