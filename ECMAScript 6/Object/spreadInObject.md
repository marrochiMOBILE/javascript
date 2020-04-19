# spread in object

```javascript
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };

const clonedObj = {...obj1}; // { foo: "bar", x: 42 }
const mergedObj = {...obj1, ...obj2}; // { foo: "baz", x: 42, y: 5 }

console.log(clonedObj);
console.log(mergedObj);
```

```javascript
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };
const obj3 = { moo: 'baz', z: 5 };
const merge = (...objects) => ({ ...objects });

let mergedObj = merge (obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }

let mergedObj2 = merge ({}, obj1, obj2);
/*
{ 
    0: {}, 
    1: { foo: 'bar', x: 42 }, 
    2: { foo: 'baz', y: 5 } 
}
*/ 
let mergedObj2b = merge (obj1, obj2, {siksa:'neraka'});
/*
{
  '0': { foo: 'bar', x: 42 },
  '1': { foo: 'baz', y: 5 },
  '2': { siksa: 'neraka' }
}
*/

let mergedObj3 = merge (obj1, obj2, obj3);
/*
{
    '0': { foo: 'bar', x: 42 },
    '1': { foo: 'baz', y: 5 },
    '2': { moo: 'baz', z: 5 }
}
*/

console.log('\n');
console.log(merge()); // {}
console.log('\n');
console.log(mergedObj);
console.log('\n');
console.log(mergedObj2);
console.log('\n');
console.log(mergedObj2b);
console.log('\n');
console.log(mergedObj3);
console.log('\n');

```